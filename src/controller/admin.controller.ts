import { IAdminService } from "../interfaces/iAdmin.service";

export class AdminController {
  constructor(private service: IAdminService) {}


  addFAQ = async (questions: any) => {
    try {
      const response = await this.service.addFAQ(questions)
      return response;
    } catch (e: any) {
      console.log(e);
    }
  };

  getFAQ = async () => {
    try {
      const response = await this.service.getFAQ()
      return response;
    } catch (e: any) {
      console.log(e);
    }
  };

  addCategories = async (categories: any) => {
    try {
      const response = await this.service.addCategories(categories)
      return response;
    } catch (e: any) {
      console.log(e);
    }
  };

  getCategories = async () => {
    try {
      const response = await this.service.getCategories()
      return response;
    } catch (e: any) {
      console.log(e);
    }
  };
}