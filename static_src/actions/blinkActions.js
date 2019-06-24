export const SEND_BLINK = '@@blink/SEND_BLINK';

export const sendBlink = (chatId) => ({
  type: SEND_BLINK,
  chatId,
});