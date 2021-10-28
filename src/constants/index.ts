class WebSocketCustomerService {
  static get wss() {
    return `wss://chatroom-ws.keyush.cn/chat_room/`;
  }
  static set wss(uuid) {
    this.wss + uuid;
  }
}

export { WebSocketCustomerService };
