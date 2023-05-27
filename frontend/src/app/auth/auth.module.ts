import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
