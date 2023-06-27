import { Component } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import { Product } from '../vista/product';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent {
form:FormGroup;

constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    name:['', Validators.required],
    description:['', Validators.required],
    price:[null, Validators.required],
    stock:[null, Validators.required],
  })
}

addProduct(){
 const product: Product = {
  name:this.form.value.name,
  description:this.form.value.desccription,
  price:this.form.value.price,
  stock:this.form.value.stock
 }

}
}
