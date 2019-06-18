import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';
import '../styles/layout';

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
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
      messages: { 1: { text: "Привет!", sender: 'me' }, 2: { text: "Как дела?", sender: 'me' } },
      input: ''
  };

  handleSendMessage = () => {
      const { messages, chats } = this.state;
      const { chatId } = this.props;

      if (input.length > 0) {
          const messageId = Number(Object.keys(messages)[Object.keys(messages).length - 1]) + 1;
          this.setState({
              messages: { ...messages, [messageId]: {text: input, sender: 'me'} },
              chats: { ...chats, [chatId]: { ...chats[chatId], messageList: [ ...chats[chatId]['messageList'], messageId] } },
              input: '',
          });
      }
  };

  componentDidUpdate(prevProps, prevState) {
      const { messages } = this.state;
      if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
          Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
          setTimeout(this.answer, 500);
      }
  }

  answer = () => {
      const { messages, chats } = this.state;
      const { chatId } = this.props;

      const messageId = Number(Object.keys(messages)[Object.keys(messages).length - 1]) + 1;
      this.setState({
          messages: { ...messages, [messageId]: {text: 'Отстань, я робот', sender: 'bot'}},
          chats: { ...chats, [chatId]: { ...chats[chatId], messageList: [ ...chats[chatId]['messageList'], messageId] } },
      });
  };

  render() {
    return (
  		<div className="content">
        <Header key="header" chatId={ this.props.chatId } />
    		<div key="layout" className="layout">
    			<div className="layout__section-left">
    				<ChatList />
    			</div>
    			<div className="layout__section-right">
            <MessageField chatId={ this.props.chatId } />
    			</div>
    		</div>
    	</div>
    )
  }
}