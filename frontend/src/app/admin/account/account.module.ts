import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AIndexComponent } from './a-index/a-index.component';
// import { AEditComponent } from './p-edit/p-edit.component';
// import { AAddComponent } from './p-add/p-add.component';
// import { ADeleteComponent } from './p-delete/p-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AIndexComponent
    // PEditComponent,
    // PAddComponent,
    // PDeleteComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
