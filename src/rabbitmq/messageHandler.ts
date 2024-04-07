import { AdminUserController } from "../controller/admin.user.controller";

import { adminUserService } from "../services/admin.user.service";
import rabbitClient from "./client";

const service = new adminUserService();
const userController = new AdminUserController(service);

export default class MessageHandler {
  static async handle(
    operation: string,
    data: any,
    correlationId: string,
    replyTo: string
  ) {
    let response = data;
    console.log("The operation admin is", operation, data);

    switch (operation) {
      case "get-all-users":
        response = await userController.getUsers.bind(userController)();
        break;

      case "get-all-instructors":
        response = await userController.getInstructors.bind(userController)();
        break;

      case "delete-user":
        response = await userController.deleteUser.bind(userController)(data);
        break;

      default:
        response = "Request-key notfound";
        break;
    }

    //Produce the response back to the client

    await rabbitClient.produce(response, correlationId, replyTo);
  }
}