import RabbitMQClient from "./rabbitmq/client";

class App {
  constructor() {
    RabbitMQClient.initialize();
  }
}

export default App;
