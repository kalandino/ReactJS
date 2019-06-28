import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';


export default combineReducers({
  messageReducer,
  chatReducer,
  profileReducer,
});
