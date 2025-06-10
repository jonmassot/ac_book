import { Component } from '@angular/core';
import { FlightService } from '../../services/flight';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-book-flight',
  templateUrl: 'booked-flight.html',
})
export class BookedFlightComponent {
  public bookedFlights$: Observable<Flight[]>;

  constructor(private flightService: FlightService) {
    this.bookedFlights$ = this.flightService.bookedFlights$;
  }

  public removeFlightFromCurrentBookedFlights(id: number): void {
    this.flightService.removeFlightFromCurrentBookedFlights(id);
  }
}
