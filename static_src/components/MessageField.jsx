import React from 'react';
import Message from './Message';
import { TextField, FloatingActionButton  } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

export default class MessageField extends React.Component {
  state = {
    messages: [{ text: "Привет!", sender: 'me' }, { text: "Как дела?", sender: 'me' }],
    input: '',
  };

  handleSendMessage = () => {
    if (this.state.input.length > 0) {
      this.setState({
        messages: [ ...this.state.messages, {text: this.state.input, sender: 'me'} ],
        input: '',
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.messages.length < this.state.messages.length &&
      this.state.messages[this.state.messages.length - 1].sender === 'me') {
      setTimeout(this.botAnswer, 500);
    }
  }

  answers = ['Привет!', 'И тебе', 'Я занят', 'Hello', 'Напишу позже', 'Отстань, я робот'];

  randomNumber(num) {
    return (Math.round(Math.random() * num));
  };

  botAnswer = () => {
    var num = this.randomNumber(this.answers.length - 1);
    this.setState({ messages: [ ...this.state.messages, {text: this.answers[num], sender: 'bot'} ] });
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
    const messageElements = this.state.messages.map((msgObj, index) => (
      <Message key={ index } text={ msgObj.text } sender={ msgObj.sender } />));

    return (
      <div className="message-field">
        { messageElements }
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
    )
  }
}
