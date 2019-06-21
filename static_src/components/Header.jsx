import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";


class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    chats: PropTypes.object.isRequired,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    const { chatId, chats } = this.props;

    return (
      <div className="header">
        <div>Чат { chatId }</div>
        <div>Число собщений: { chats[chatId]['messageList'].length }</div>
      </div>
    )
  }
}

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);



