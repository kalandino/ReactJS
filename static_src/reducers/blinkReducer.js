import update from 'react-addons-update';
import { SEND_BLINK } from '../actions/blinkActions';


const initialStore = {
  blink: 'mlllk;lkl;',
};

export default function blinkReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_BLINK: {
      return action.blink;
    }
    default:
      return store;
  }
}
