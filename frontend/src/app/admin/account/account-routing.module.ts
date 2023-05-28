import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AIndexComponent } from './a-index/a-index.component';

const routes: Routes = [
  {path : '', component: AIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
