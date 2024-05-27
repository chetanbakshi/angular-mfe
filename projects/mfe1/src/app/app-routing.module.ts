import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
const routes: Routes = [

  {path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)}
  // {path: '', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    AppComponent
  ]
})
export class AppRoutingModule { }
