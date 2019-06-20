import update from 'react-addons-update';
import { SEND_CHAT } from '../actions/chatActions';


const initialStore = {
  chats: {
    1: {title: 'Чат 1', messageList: [1]},
    2: {title: 'Чат 2', messageList: [2]},
    3: {title: 'Чат 3', messageList: []},
  },
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_CHAT: {
      return update(store, {
        chats: { $set: { ...store.chats, [action.chatId]: 
          { ...store.chats[action.chatId], messageList: 
            [ ...store.chats[action.chatId]['messageList'], action.messageId] } } },
      });
    }
    default:
      return store;
  }
}
