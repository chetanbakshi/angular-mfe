import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { bookingGuard } from './booking.guard';
import { loadRemoteModule } from '@angular-architects/module-federation'



const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () => import('mfe1/Module')
      .then(m => m.BookingModule)
      .catch(err => console.log(err)),
    resolve: { name: bookingGuard }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
