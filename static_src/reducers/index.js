import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import chatReducer from './chatReducer';


export default combineReducers({
  messageReducer,
  chatReducer,
});
