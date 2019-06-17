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