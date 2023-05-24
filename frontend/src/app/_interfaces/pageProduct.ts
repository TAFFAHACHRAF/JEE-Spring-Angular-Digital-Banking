import { Product } from "./product";

export interface PageProduct{
    products : Product[];
    page: number;
    size: number;
    totalPage: number;
}