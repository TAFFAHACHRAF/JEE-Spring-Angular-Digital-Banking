import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashbord/dashbord.component';
const routes: Routes = [
  {
    path: '', component: AlayoutComponent, children : [
      { path : '', redirectTo : 'dashbord', pathMatch : 'full'},
      { path : 'dashbord', component : DashboardComponent},
      { path : 'customer', loadChildren: () => import("./customer/customer.module").
        then(m => m.CustomerModule)},
      { path : 'account', loadChildren: () => import("./account/account.module").
      then(m => m.AccountModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
