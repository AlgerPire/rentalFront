import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CarouselModule} from "ngx-owl-carousel-o";
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {DefaultComponent} from './components/default/default.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RefundComponent} from './components/refund/refund.component';
import {BookingComponent} from './components/booking/booking.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './components/admin-panel/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
    RefundComponent,
    BookingComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
