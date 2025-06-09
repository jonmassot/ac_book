import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFlightComponent } from './components/book-flight/book-flight';
import { MenuComponent } from './components/menu/menu';
import { UsersComponent } from './components/users/users';
import { FlightService } from './services/flight';
import { UserService } from './services/user';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    BookFlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [UserService, FlightService],
  bootstrap: [AppComponent],
})
export class AppModule {}
