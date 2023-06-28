import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../vista/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
 listaProducts: Product[] = []

   constructor(private _productService: ProductService){ }

   ngOnInit(): void{
    this.getListProducts();
   }

   getListProducts(){
    this._productService.getProducts().subscribe((data)=>{
  this.listaProducts = data;
    })
  }
}
