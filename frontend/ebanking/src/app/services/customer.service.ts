import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Custumer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<Custumer>>{
    return this.http.get<Array<Custumer>>("http://localhost:8085/customers")
  }
}
