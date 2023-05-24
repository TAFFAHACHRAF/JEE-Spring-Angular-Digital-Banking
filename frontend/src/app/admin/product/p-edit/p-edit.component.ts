import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductData } from 'src/app/_interfaces/ProductData';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-p-edit',
  templateUrl: './p-edit.component.html',
  styleUrls: ['./p-edit.component.css']
})

export class PEditComponent implements OnInit {
  id!: number;
  product!: ProductData;

  form: ProductData = {
    name: "",
    price: 0,
    quantity: 0
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.productService.getProductById(this.id).subscribe(
        (data: ProductData) => {
          this.product = data;
          this.form = {
            name: this.product.name,
            quantity: this.product.quantity,
            price: this.product.price
          };
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

  onSubmit(): void {
    this.productService.updateProduct(this.form, this.id).subscribe(
      (data: ProductData) => {
        this.router.navigate(["admin/product"])
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
  
