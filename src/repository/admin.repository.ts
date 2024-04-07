import { DBConnectionError } from "@nabeelktr/error-handler";
import { IRepository } from "../interfaces/iRepository";
import FAQModel from "../model/schemas/faq.schema";

export class AdminRepository implements IRepository{
    async addFAQ(questions: any): Promise<Object> {
        try{
            await FAQModel.create(questions)
            return{success: true}
        }catch(e:any){
            throw new DBConnectionError()
        }
    }
    
}