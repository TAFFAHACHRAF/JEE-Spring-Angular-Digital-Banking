import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { PIndexComponent } from './c-index/p-index.component';
import { PEditComponent } from './c-edit/p-edit.component';
import { PAddComponent } from './c-add/p-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PIndexComponent,
    PEditComponent,
    PAddComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomerModule { }
