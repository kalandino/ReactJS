import React from 'react';
import PropTypes from 'prop-types';
import ChatList from './ChatList';
import '../styles/profile';
import '../styles/layout';

export default class Profile extends React.Component {

  render() {
    return (
  		<div className="content">
        <div key="layout" className="layout">
          <div className="layout__section-left">
            <ChatList />
          </div>
          <div className="layout__section-right">
            <div className="profile">
              <h1>Профиль</h1>
            </div>
          </div>
        </div>
    	</div>
    )
  }
}