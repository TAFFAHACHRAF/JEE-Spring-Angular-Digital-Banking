import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../_interfaces/customer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environment/environment';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  url =environment.backendHost+'/api/test/admin/Customers'
  constructor(private http:HttpClient) { }

  getCustomers(page: number = 1, size: number = 4): Observable<Customer[]> {
    const url = `${this.url}?page=${page}&size=${size}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => response.content)
    );
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  addCustomer(CustomerData: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, CustomerData);
  }

  getCustomerById(id: number): Observable<Customer> {
    const url = `${this.url}/${id}`;
    return this.http.get<Customer>(url);
  }

  updateCustomer(CustomerData: Customer, id: number): Observable<Customer> {
    const url = `${this.url}/${id}`;
    return this.http.put<Customer>(url, CustomerData);
  }
  
  getCustomerByKeyword(keyword: string): Observable<Customer[]> {
    const url = `${this.url}/search?keyword=${keyword}`;
    return this.http.get<Customer[]>(url);
  }
  
}