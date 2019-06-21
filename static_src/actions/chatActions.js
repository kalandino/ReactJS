export const SEND_CHAT = '@@chat/SEND_CHAT';

export const sendChat = (chatId, messageId) => ({
  type: SEND_CHAT,
  chatId,
  messageId,
});