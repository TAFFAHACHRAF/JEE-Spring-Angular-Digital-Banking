import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/_interfaces/customer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-p-index',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.css']
})
export class PIndexComponent implements OnInit {
  public customers!: Customer[];
  public keyword: string = "";
  public currentPage: number = 1;
  public totalPages: number=5;
  public pageSize: number = 5;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers(this.currentPage, this.pageSize);
  }

  getCustomers(page: number = 1, size: number = 4) {
    this.customerService.getCustomers().subscribe(
      (data) => {
        this.customers = data;
        //this.totalPages=this.products.length / this.pageSize
      }
    );
  }

  // searchProducts() {
  //   this.productService.getProductByKeyword(this.keyword).subscribe({
  //     next: (value) => {
  //       this.products = value;
  //     },
  //   });
  // }

  // gotoPage(page: number) {
  //   this.currentPage = page;
  //   this.getProducts(page, this.pageSize);
  // }

  // getPaginationRange(): number[] {
  //   return Array.from({ length: this.totalPages - 1 }, (_, index) => index + 1); // Subtract 1 from totalPages
  // }
}
