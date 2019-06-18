import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    chats: PropTypes.object,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
  	const { chats, chatId } = this.props;

    return (
      <h1 className="header">Чат { chatId }, Количество сообщений: { chats[chatId]['messageList'].length }</h1>
    )
  }
}



