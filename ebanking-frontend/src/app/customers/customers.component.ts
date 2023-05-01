import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customers : any;
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get("http://localhost:8085/customers").subscribe(data=>{
      this.customers=data;
    }, error => {
      console.log(error)
    })
  }
}
