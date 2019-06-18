import React from 'react';
import PropTypes from "prop-types";
// import Layout from './Layout';
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/messages';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        chats: PropTypes.object,
        messages: PropTypes.object,
        text: PropTypes.string,
        sender: PropTypes.string,
        input: PropTypes.string,
        handleSendMessage: PropTypes.func,
    };

    static defaultProps = {
        chatId: 1,
    };

    // state = {
    //   input: '',
    // };

    handleType = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) { // Enter
            this.props.handleSendMessage();
        }
    };

    render() {
        const { messages, chats, chatId, text, sender } = this.props;
        // const { chatId } = this.props;

        const messageElements = chats[chatId]['messageList'].map((msgId, index) => (
            <Message sendMessage={ this.props.handleSendMessage } key={ index } text={ messages[msgId].text } sender={ messages[msgId].sender } />));

        return (
          <div>
            <div className="message-field">
                { messageElements }
            </div>
            <div className="input-field">
              <TextField
                  name="input"
                  value={ this.props.input }
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
