import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    chats: { 1: { text: "Привет!", sender: 'me' }, 2: { text: "Как дела?", sender: 'me' } },
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $set: { ...store.messages, [action.messageId]: {text: action.text, sender: action.sender} } },
            });
        }
        default:
            return store;
    }
}
