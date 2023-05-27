import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { PlayoutComponent } from './playout/playout.component';
import { PheaderComponent } from './pheader/pheader.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    PlayoutComponent,
    PheaderComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
