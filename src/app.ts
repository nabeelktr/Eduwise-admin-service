import { connectDB } from "./config/db";
import RabbitMQClient from "./rabbitmq/client";

class App {
  constructor() {
    RabbitMQClient.initialize();
    connectDB()
  }
}

export default App;
