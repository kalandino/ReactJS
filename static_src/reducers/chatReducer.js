import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { SEND_CHAT, HIGHLIGHT_CHAT, UNHIGHLIGHT_CHAT, 
  START_CHATS_LOADING, SUCCESS_CHATS_LOADING, ERROR_CHATS_LOADING } from '../actions/chatActions';


const initialStore = {
  chats: {},
  isLoading: false,
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
    case START_CHATS_LOADING: {
      return update(store, {
        isLoading: { $set: true },
      });
    };
    case SUCCESS_CHATS_LOADING: {
      console.log(SUCCESS_CHATS_LOADING);
      return update(store, {
        chats: { $set: action.payload.entities.chats },
        isLoading: { $set: false },
      });
    };
    case ERROR_CHATS_LOADING: {
      return update(store, {
        isLoading: { $set: false },
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
    };
    default:
      return store;
  }
}

