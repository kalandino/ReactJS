import React from 'react';
import PropTypes from 'prop-types';
import ChatList from './ChatList';
import CircularProgress from 'material-ui/CircularProgress';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { loadProfile } from "../actions/profileActions";
import '../styles/profile';
import '../styles/layout';


class Profile extends React.Component {
  static propTypes = {
    loadProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    profileId: 1,
  };

  componentDidMount () {
    this.props.loadProfile();
  }

  render() {
    if (this.props.isLoading) {
      return <CircularProgress />
    }

    const { profile, profileId } = this.props;

    return (
  		<div className="content">
        <div key="layout" className="layout">
          <div className="layout__section-left">
            <ChatList />
          </div>
          <div className="layout__section-right">
            <div className="profile">
              <p>Мой профиль:</p>
              <br />
              <h1>{ profile[profileId].name }</h1>
              <p>{ profile[profileId].email }</p>
            </div>
          </div>
        </div>
    	</div>
    )
  }
}

const mapStateToProps = ({ profileReducer }) => ({
  profile: profileReducer.profile,
  isLoading: profileReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);