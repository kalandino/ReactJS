import React from 'react';
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/messages';
import PropTypes from "prop-types";

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        // sendMessage: PropTypes.func.isRequired,
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
        input: '',
    };

    handleSendMessage = () => {
        // this.props.sendMessage(this.state.input)
        const { messages, chats, input } = this.state;
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
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;

        const messageId = Number(Object.keys(messages)[Object.keys(messages).length - 1]) + 1;
        this.setState({
            messages: { ...messages, [messageId]: {text: 'Отстань, я робот', sender: 'bot'}},
            chats: { ...chats, [chatId]: { ...chats[chatId], messageList: [ ...chats[chatId]['messageList'], messageId] } },
        });
    };

    handleType = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) { // Enter
            this.handleSendMessage();
        }
    };

    render() {
        const { messages, chats } = this.state;
        const { chatId } = this.props;

        const messageElements = chats[chatId]['messageList'].map((msgId, index) => (
            <Message sendMessage={ this.handleSendMessage } key={ index } text={ messages[msgId].text } sender={ messages[msgId].sender } />));

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
                onClick={ this.handleSendMessage }
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
