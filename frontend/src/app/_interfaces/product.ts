import { Category } from "./category";

export interface Product{
    id:number;
    name:string;
    quantity:number;
    photo:string;
    price:number;
    category:Category;
}