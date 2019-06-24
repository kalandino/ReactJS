import { SEND_BLINK, showBlink } from "../actions/blinkActions";


export default store => next => (action) => {
  switch (action.type) {
    case SEND_BLINK:
    	console.log('blink');
  }
  return next(action)
}