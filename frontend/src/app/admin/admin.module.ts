import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AheaderComponent } from './aheader/aheader.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AlayoutComponent,
    DashbordComponent,
    SidemenuComponent,
    AheaderComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
