import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import { List, ListItem } from 'material-ui/List';

export default class ChatList extends React.Component {
  render() {
    return (
    	<List>
    		<ListItem primaryText="Чат 1" leftAvatar={<Avatar icon={<FileFolder />} />} />
    		<ListItem primaryText="Чат 2" leftAvatar={<Avatar icon={<FileFolder />} />} />
    		<ListItem primaryText="Чат 3" leftAvatar={<Avatar icon={<FileFolder />} />} />
    	</List>
    )
  }
}
