import { IAdminService } from "../interfaces/iAdmin.service";
import { IRepository } from "../interfaces/iRepository";

export class AdminService implements IAdminService {
  constructor(private repository: IRepository) {}

  getFAQ(): Promise<any> {
    return this.repository.getFAQ();
  }

  addFAQ(questions: any): Promise<Object> {
    return this.repository.addFAQ(questions);
  }
}
