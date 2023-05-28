import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './_utils/error/error.component';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
// import { AAAddComponent } from './admin/account/aa-add/a-add.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
    // AAAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
