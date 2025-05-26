import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users';
import { MenuComponent } from './components/menu/menu';
import { BookFlightComponent } from './components/book-flight/book-flight';
import { UserService } from './services/user';
import { FlightService } from './services/flight';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    BookFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
