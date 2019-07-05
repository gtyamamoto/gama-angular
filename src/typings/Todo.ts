export interface Todo {
    id : number;
    title? : string;
    description? : string; // tipo facultativo
    finished? : boolean;
    date?: string;
    userId:string;
}