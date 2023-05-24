import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './account-routing.module';
import { AIndexComponent } from './a-index/a-index.component';
// import { AEditComponent } from './p-edit/p-edit.component';
// import { AAddComponent } from './p-add/p-add.component';
// import { ADeleteComponent } from './p-delete/p-delete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AIndexComponent
    // PEditComponent,
    // PAddComponent,
    // PDeleteComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class AccountModule { }
