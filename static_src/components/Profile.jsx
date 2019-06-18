import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import '../styles/profile';

export default class Profile extends React.Component {

  render() {
    return (
  		<div className="content">
    		<div className="profile">
    			<h1>Профиль</h1>
    		</div>
    	</div>
    )
  }
}