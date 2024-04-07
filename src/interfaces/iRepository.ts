export interface IRepository {
    addFAQ(questions: any): Promise<Object>;
}