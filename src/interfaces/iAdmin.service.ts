export interface IAdminService {
    addFAQ(questions: any): Promise<Object>;
    getFAQ(): Promise<any>;
}