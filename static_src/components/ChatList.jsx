import React from 'react';
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";


class ChatList extends React.Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
  };

  handleNavigate = (link) => {
    this.props.push(link)
  };

  render() {
    return (
    	<List>
        <ListItem onClick={ () => this.handleNavigate("/profile/") } primaryText="Профиль" leftAvatar={<Avatar icon={<FileFolder />} />} />
        <ListItem onClick={ () => this.handleNavigate("/chat/1/") } primaryText="Чат 1" leftAvatar={<Avatar icon={<FileFolder />} />} />
        <ListItem onClick={ () => this.handleNavigate("/chat/2/") } primaryText="Чат 2" leftAvatar={<Avatar icon={<FileFolder />} />} />
        <ListItem onClick={ () => this.handleNavigate("/chat/3/") } primaryText="Чат 3" leftAvatar={<Avatar icon={<FileFolder />} />} />
    	</List>
    )
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
