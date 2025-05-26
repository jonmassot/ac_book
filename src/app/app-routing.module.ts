import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users';
import { BookFlightComponent } from './components/book-flight/book-flight';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'book',
    component: BookFlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
