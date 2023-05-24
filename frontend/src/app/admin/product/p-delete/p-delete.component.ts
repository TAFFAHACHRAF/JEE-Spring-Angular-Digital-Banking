import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-p-delete',
  templateUrl: './p-delete.component.html',
  styleUrls: ['./p-delete.component.css']
})
export class PDeleteComponent implements OnInit{
    id: number = 0;
  
    constructor(private route: ActivatedRoute,
      private router:Router,
      private productService: ProductService) {}
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        this.deleteProduct(this.id)
        this.router.navigate(['admin/product'])
      });
    }

    deleteProduct(id:number){
      this.productService.deleteProduct(id).subscribe({
      })
    }

}
