import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";


class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    messageCounter: PropTypes.number.isRequired,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    return (
      <div className="header">
        <span>Чат { this.props.chatId }</span>
        <span>Число собщений: { this.props.messageCounter }</span>
      </div>
    )
  }
}

const mapStateToProps = ({ messageReducer }) => ({
  messageCounter: Object.keys(messageReducer.messages).length,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);



