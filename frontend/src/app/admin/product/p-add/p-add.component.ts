import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { ProductData } from 'src/app/_interfaces/ProductData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-add',
  templateUrl: './p-add.component.html',
  styleUrls: ['./p-add.component.css']
})

export class PAddComponent implements OnInit {
  
  form: ProductData = {
    name: "",
    quantity: 0,
    price: 0
  };

  constructor(
    private productService: ProductService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.productService.addProduct(this.form).subscribe(
      (data) =>{
        this.router.navigate(["admin/product"])
      }
      );
  }
}
