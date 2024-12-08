class EventMessage {
  constructor(username, color) {
    this.username = username;
    this.color = color;
  }
}

class ButtonEventNotifier {
  handlers = [];


  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    this.socket.onmessage = async (msg) => {
      try {
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch {}
    };
  }

  broadcastEvent(username, color) {
    const event = new EventMessage(username, color);
    this.socket.send(JSON.stringify(event));
  }


  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

const ButtonNotifier = new ButtonEventNotifier();
export { ButtonEvent, ButtonNotifier };
