import { NotFoundError } from "@nabeelktr/error-handler";
import { IAdminUserService } from "../interfaces/iAdmin.User.service";

export class AdminUserController {
  constructor(private service: IAdminUserService) {}

  getUsers = async () => {
    try {
      const response = await this.service.getUsers()
      return response;
    } catch (e: any) {
      console.log(e);
    }
  };

  getInstructors = async () => {
    try {
      const response = await this.service.getInstructors()
      return response;
    } catch (e: any) {
      console.log(e);
    }
  };

  deleteUser = async (userId:string) => {
    try{
      const response = await this.service.deleteUser(userId);
      return response
    }catch(e:any){
      console.log(e);
    }
  }
 
}
