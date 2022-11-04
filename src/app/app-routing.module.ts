  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import {IndexComponent} from "./components/index/index.component";
  import {RentalComponent} from "./components/rental/rental.component";
  import {DefaultComponent} from "./components/default/default.component";
  import {RefundComponent} from "./components/refund/refund.component";
  import {BookingComponent} from "./components/booking/booking.component";

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'rental',component:RentalComponent},
  {path:'refund',component:RefundComponent},
  {path:'booking',component:BookingComponent},
  {path:'',component:DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingComponents = [IndexComponent, RentalComponent,DefaultComponent]
