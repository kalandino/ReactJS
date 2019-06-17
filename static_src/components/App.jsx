import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout';
import Message from './Message';


export default class App extends React.Component {
  componentDidMount () {
    console.log('It works!');
  }

  render() {
    return (
    	// <Layout />
      <Switch>
        <Route exact path='/' component={ Layout } />
        <Route exact path='/profile/' render={ () => <Message text="Профиль" sender="me" /> } />
        <Route exact path='/chat/:chatId/' render={ obj => <Layout chatId={ Number(obj.match.params.chatId) } /> } />
      </Switch>
    )
  }
}
