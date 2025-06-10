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
import { ProfileComponent } from './components/profile/profile';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    BookFlightComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [UserService, FlightService],
  bootstrap: [AppComponent],
})
export class AppModule {}
