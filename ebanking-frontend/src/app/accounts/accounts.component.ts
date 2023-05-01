import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{
  accounts : any;
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get("http://localhost:8085/accounts").subscribe(data=>{
      this.accounts=data;
    }, error => {
      console.log(error)
    })
  }
}
