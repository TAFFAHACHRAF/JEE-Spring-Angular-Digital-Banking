import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/_interfaces/customer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-p-add',
  templateUrl: './p-add.component.html',
  styleUrls: ['./p-add.component.css']
})

export class PAddComponent implements OnInit {
  
  form: Customer = {
    id:0,
    name: "",
    email: ""
  };
  public currentPath = this.router.url
  constructor(
    private customerService: CustomerService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.customerService.addCustomer(this.form).subscribe(
      (data) =>{
        this.router.navigate(["admin/customer"])
      }
      );
  }
}
