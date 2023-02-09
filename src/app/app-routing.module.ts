import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {RentalComponent} from "./components/rental/rental.component";
import {DefaultComponent} from "./components/default/default.component";
import {RefundComponent} from "./components/refund/refund.component";
import {BookingComponent} from "./components/booking/booking.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/admin-panel/dashboard/dashboard.component";

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'login',component:LoginComponent},
  {path:'rental',component:RentalComponent},
  {path:'refund',component:RefundComponent},
  {path:'booking',component:BookingComponent},
  {path:'',component:DefaultComponent},
  {path:'admin-dashboard',component:DashboardComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingComponents = [IndexComponent, RentalComponent,DefaultComponent]
