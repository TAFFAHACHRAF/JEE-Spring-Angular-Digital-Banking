import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_interfaces/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-p-index',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.css']
})
export class PIndexComponent implements OnInit {
  public products!: Product[];
  public keyword: string = "";
  public currentPage: number = 1;
  public totalPages: number=5;
  public pageSize: number = 5;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts(this.currentPage, this.pageSize);
  }

  getProducts(page: number = 1, size: number = 4) {
    this.productService.getProducts(page, size).subscribe(
      (data) => {
        this.products = data;
        //this.totalPages=this.products.length / this.pageSize
      }
    );
  }

  searchProducts() {
    this.productService.getProductByKeyword(this.keyword).subscribe({
      next: (value) => {
        this.products = value;
      },
    });
  }

  gotoPage(page: number) {
    this.currentPage = page;
    this.getProducts(page, this.pageSize);
  }

  getPaginationRange(): number[] {
    return Array.from({ length: this.totalPages - 1 }, (_, index) => index + 1); // Subtract 1 from totalPages
  }
}
