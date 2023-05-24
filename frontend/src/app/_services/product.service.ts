import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_interfaces/product';
import { Observable } from 'rxjs';
import { ProductData } from '../_interfaces/ProductData';
import { PageProduct } from '../_interfaces/pageProduct';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url ='http://localhost:8093/api/test/admin/products'
  constructor(private http:HttpClient) { }

  getProducts(page: number = 1, size: number = 4): Observable<Product[]> {
    const url = `${this.url}?page=${page}&size=${size}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => response.content)
    );
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  addProduct(productData: ProductData): Observable<Product> {
    return this.http.post<Product>(this.url, productData);
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.http.get<Product>(url);
  }

  updateProduct(productData: ProductData, id: number): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.http.put<Product>(url, productData);
  }
  
  getProductByKeyword(keyword: string): Observable<Product[]> {
    const url = `${this.url}/search?keyword=${keyword}`;
    return this.http.get<Product[]>(url);
  }
  
}
