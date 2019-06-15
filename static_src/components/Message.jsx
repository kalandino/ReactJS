import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

export default class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
  };

  render() {
    return <Chip style={ this.props.sender === 'bot' ? { backgroundColor: 'lightblue' } : {} }>
      { this.props.text }
    </Chip>
  }
}
