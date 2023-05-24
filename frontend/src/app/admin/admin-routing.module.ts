import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {
    path: '', component: AlayoutComponent, children : [
      { path : '', redirectTo : 'dashbord', pathMatch : 'full'},
      { path : 'dashbord', component : DashbordComponent},
      { path : 'product', loadChildren: () => import("./product/product.module").
        then(m => m.ProductModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
