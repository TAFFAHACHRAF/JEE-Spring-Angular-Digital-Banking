import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/_interfaces/customer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-p-edit',
  templateUrl: './p-edit.component.html',
  styleUrls: ['./p-edit.component.css']
})

export class PEditComponent implements OnInit {
  id!: number;
  customer!: Customer;
  public currentPath = this.router.url

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) {}

  form: Customer = {
    id: 0,
    name: "",
    email: ""
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.customerService.getCustomerById(this.id).subscribe(
        (data: Customer) => {
          this.customer = data;
          this.form = {
            id:this.customer.id,
            name: this.customer.name,
            email: this.customer.email
          };
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

  onSubmit(): void {
    this.customerService.updateCustomer(this.form, this.id).subscribe(
      (data: Customer) => {
        this.router.navigate(["admin/customer"])
        // Handle success response
      },
      (error: any) => {
        console.log(error);
        if (error.status === 400) {
          // Handle specific error status
          console.log('Bad Request: Session expired');
        } else {
          // Handle other error statuses
          console.log('An error occurred');
        }
      }
    );
  }
}
  
