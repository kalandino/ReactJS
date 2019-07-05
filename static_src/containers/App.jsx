import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Profile from './Profile';
import Message from './Message';
import InstallPopup from '../components/InstallPopup';


export default class App extends React.Component {
  componentDidMount () {
    console.log('It works!');
  }

  render() {
  	return (
      [
        <InstallPopup/>,
        <Switch key='router'>
          <Route exact path='/' component={ Layout } />
          <Route exact path='/profile/' component={ Profile } />
          <Route exact path='/chat/:chatId/' render={ obj => <Layout chatId={ Number(obj.match.params.chatId) } /> } />
        </Switch>
      ]
    )
  }
}
