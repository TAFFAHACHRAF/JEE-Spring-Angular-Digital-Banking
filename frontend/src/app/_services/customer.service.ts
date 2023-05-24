import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environment/environment';
import { Customer } from '../_interfaces/customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  url =environment.backendHost+'/customers'
  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.url)
  }
  
  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  addCustomer(customerData: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customerData);
  }

  getCustomerById(id: number): Observable<Customer> {
    const url = `${this.url}/${id}`;
    return this.http.get<Customer>(url);
  }

  updateCustomer(customer: Customer, id: number): Observable<Customer> {
    const url = `${this.url}/${id}`;
    return this.http.put<Customer>(url, customer);
  }
  
  getCustomerByKeyword(keyword: string): Observable<Customer[]> {
    const url = `${this.url}/search?keyword=${keyword}`;
    return this.http.get<Customer[]>(url);
  }
  
}
