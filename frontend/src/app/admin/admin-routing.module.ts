import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashbordComponent } from './dashbord/dashbord.component';
const routes: Routes = [
  {
    path: '', component: AlayoutComponent, children : [
      { path : '', redirectTo : 'dashbord', pathMatch : 'full'},
      { path : 'dashbord', component : DashbordComponent},
      { path : 'customer', loadChildren: () => import("./customer/customer.module").
        then(m => m.CustomerModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
