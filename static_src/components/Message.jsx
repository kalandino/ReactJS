import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

export default class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
  };

  render() {
  	this.props.sendMessage();

    return (
    	<Chip className={ this.props.sender === 'bot' ? 'bot-message' : 'my-message' } >
      	{ this.props.text }
    	</Chip>
    )
  }
}
