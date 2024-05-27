import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { BookingComponent } from './booking.component';

const routes: Routes = [

  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'create', component: CreateComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    CreateComponent,
    BookingComponent
  ]
})
export class BookingRoutingModule { }
