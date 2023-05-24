import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { PIndexComponent } from './p-index/p-index.component';
import { PEditComponent } from './p-edit/p-edit.component';
import { PAddComponent } from './p-add/p-add.component';
import { PDeleteComponent } from './p-delete/p-delete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PIndexComponent,
    PEditComponent,
    PAddComponent,
    PDeleteComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomerModule { }
