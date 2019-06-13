import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
	state = {
		messages: ["Привет", "Как дела?"]
	};

	newMessage = false;

	answers = ['Привет!', 'И тебе', 'Я занят', 'Hello', 'Напишу позже'];

	randomNumber(num) {
	 	return (Math.round(Math.random() * num));
	};

	handleClick = () => {
		this.setState({ messages: [ ...this.state.messages, 'Привет' ] });
		this.newMessage = true;
	};

	roboAnswer = () => {
		var num = this.randomNumber(this.answers.length - 1);

		this.setState({ messages: [ ...this.state.messages, this.answers[num] ] });
		this.newMessage = false;
	};

	componentDidUpdate(prevProps, prevState) {
		console.log('prevState:', prevState, 'prevProps:', prevProps);
		console.log('thisState:', this.state, 'thisProps:', this.props);

		if (this.newMessage) {
    	this.roboAnswer();
  	}
	}

	render() {
		const messageElements = this.state.messages.map((text, index) => (
			<Message key={ index } text={ text } />));

		return <div>
			{ messageElements }
			<button onClick={ this.handleClick }>Отправить собщение</button>
		</div>
	}
}





