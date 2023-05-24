import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-p-delete',
  templateUrl: './p-delete.component.html',
  styleUrls: ['./p-delete.component.css']
})
export class PDeleteComponent implements OnInit{
    id: number = 0;
  
    constructor(private route: ActivatedRoute,
      private router:Router,
      private customerService: CustomerService) {}
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        this.deleteProduct(this.id)
        this.router.navigate(['admin/customer'])
      });
    }

    deleteProduct(id:number){
      this.customerService.deleteCustomer(id).subscribe({
      })
    }
}
