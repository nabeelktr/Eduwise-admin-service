import { IAdminService } from "../interfaces/iAdmin.service";
import { IRepository } from "../interfaces/iRepository";

export class AdminService implements IAdminService{


    constructor(private repository: IRepository) {}

    addFAQ(questions: any): Promise<Object> {
        return this.repository.addFAQ(questions);
    }
    
}