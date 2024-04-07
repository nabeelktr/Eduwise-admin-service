export interface IRepository {
    addFAQ(questions: any): Promise<Object>;
    getFAQ(): Promise<any>;
}