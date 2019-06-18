import React from 'react';
import PropTypes from "prop-types";
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/messages';

export default class MessageField extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    chats: PropTypes.object,
    messages: PropTypes.object,
    input: PropTypes.string,
    handleSendMessage: PropTypes.func,
    handleType: PropTypes.func,
    handleKeyUp: PropTypes.func,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    const { chatId, messages, chats } = this.props;

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
            onChange={ this.props.handleType }
            onKeyUp={ this.props.handleKeyUp }
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
