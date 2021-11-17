// 客服聊天室WS
export class WebSocketCustomerService {
  static get CHAT_ROOM() {
    return 'wss://beta-chat-ws.keyush.cn/chat_room/';
  }

  static get NOTIFICATION() {
    return 'wss://beta-chat-ws.keyush.cn/notification';
  }

  static get UUID() {
    return '535fe8a3d9fb44e0bfc50ebbdb6b4b32';
  }
}
