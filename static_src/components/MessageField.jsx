import React from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import { sendMessage } from "../actions/messageActions";
import '../styles/messages';

class MessageField extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    sendMessage: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired,
  };

  static defaultProps = {
    chatId: 1,
  };


  state = {
    chats: {
      1: {title: 'Чат 1', messageList: [1]},
      2: {title: 'Чат 2', messageList: [2]},
      3: {title: 'Чат 3', messageList: []},
    },
    input: ''
  };

  handleSendMessage = () => {
    const { chats, input } = this.state;
    const { chatId, messages } = this.props;

    if (input.length > 0) {
      const messageId = Object.keys(messages).length + 1;
      this.props.sendMessage(messageId, input, 'me', chatId);
      this.setState({
        chats: { ...chats, [chatId]: { ...chats[chatId], messageList: [ ...chats[chatId]['messageList'], messageId] } },
        input: '',
      });
    }
  };

  componentDidUpdate(prevProps) {
    const { messages } = this.props;
    if (Object.keys(prevProps.messages).length < Object.keys(messages).length &&
      Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
      setTimeout(this.answer, 500);
    }
  }

  answer = () => {
    const { chats } = this.state;
    const { chatId, messages } = this.props;

    const messageId = Object.keys(messages).length + 1;
    this.props.sendMessage(messageId, 'Отстань, я робот', 'bot', chatId);
    this.setState({
      chats: { ...chats, [chatId]: { ...chats[chatId], messageList: [ ...chats[chatId]['messageList'], messageId] } },
    });
  };

  handleType = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleSendMessage();
    }
  };

  render() {
    const { chats } = this.state;
    const { chatId, messages } = this.props;

    const messageElements = chats[chatId]['messageList'].map((msgId, index) => (
      <Message key={ index } text={ messages[msgId].text } sender={ messages[msgId].sender } />));

    return (
      <div>
        <div className="message-field">
            { messageElements }
        </div>
        <div className="input-field">
          <TextField
            name="input"
            value={ this.state.input }
            onChange={ this.handleType }
            onKeyUp={ this.handleKeyUp }
            hintText="Напишите сообщение"
          />
          <FloatingActionButton
            onClick={ this.props.handleSendMessage }
            mini={ true }
            style={{
              verticalAlign: 'middle',
              marginLeft: '16px'
            }}>
            <SendIcon />
          </FloatingActionButton>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
