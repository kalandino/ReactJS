import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { SEND_CHAT, HIGHLIGHT_CHAT, UNHIGHLIGHT_CHAT } from '../actions/chatActions';


const initialStore = {
  chats: {
    1: {title: 'Чат 1', messageList: [1]},
    2: {title: 'Чат 2', messageList: [2]},
    3: {title: 'Чат 3', messageList: []},
  },
  highlightedChat: undefined,
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      return update(store, {
        chats: { $merge: { [action.chatId]: {
          title: store.chats[action.chatId].title,
          messageList: [...store.chats[action.chatId].messageList, action.messageId]
        } } },
      });
    };
    case SEND_CHAT: {
      return update(store, {
        chats: { $set: { ...store.chats, [action.chatId]: {
            title: action.title,
            messageList: []
        } } },
      });
    };
    case HIGHLIGHT_CHAT: {
      return update(store, {
        highlightedChat: { $set: action.chatId },
      });
    };
    case UNHIGHLIGHT_CHAT: {
      return update(store, {
        highlightedChat: { $set: undefined },
      });
    }
    default:
      return store;
  }
}

