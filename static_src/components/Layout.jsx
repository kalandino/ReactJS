import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';
import '../styles/style';



export default class Layout extends React.Component {
  render() {
    return (
  		<div className="content">
    		<Header key="header" />
    		<div key="layout" className="layout">
    			<div className="layout__section-left">
    				<ChatList />
    			</div>
    			<div className="layout__section-right">
						<MessageField />
    			</div>
    		</div>
    	</div>
    )
  }
}