import React from 'react';
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';

export default class ChatList extends React.Component {
  render() {
    return (
    	<List>
    		<Link to="/profile/"><ListItem primaryText="Профиль" leftAvatar={<Avatar icon={<FileFolder />} />} /></Link>
    		<Link to="/chat/1/"><ListItem primaryText="Чат 1" leftAvatar={<Avatar icon={<FileFolder />} />} /></Link>
    		<Link to="/chat/2/"><ListItem primaryText="Чат 2" leftAvatar={<Avatar icon={<FileFolder />} />} /></Link>
    		<Link to="/chat/3/"><ListItem primaryText="Чат 3" leftAvatar={<Avatar icon={<FileFolder />} />} /></Link>
    	</List>
    )
  }
}
