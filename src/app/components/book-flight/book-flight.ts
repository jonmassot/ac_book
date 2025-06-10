import { Component } from '@angular/core';
import { FlightService } from '../../services/flight';
import { Flight } from 'src/app/models/flight';

@Component({
  templateUrl: './book-flight.html',
  styleUrls: ['./book-flight.scss'],
  selector: 'app-book-flight',
})
export class BookFlightComponent {
  private _flights: Flight[] = [];
  public flightSearch: string = '';

  public displayedColumns: string[] = [
    'id',
    'flightNumber',
    'departure',
    'arrival',
    'departureTime',
    'arrivalTime',
    'price',
    'cargoCapacity',
    'planeAge',
    'planeType',
    'action',
  ];

  constructor(private flightService: FlightService) {
    this.flightService.getFlights().subscribe({
      next: (flights: Flight[]) => {
        this._flights = flights;
      },
      error: (err) => {
        console.error('Error fetching flights:', err);
      },
    });
  }

  get flights(): Flight[] {
    return this._flights.filter((flight) =>
      Object.values(flight).some((value) =>
        String(value).toLowerCase().includes(this.flightSearch)
      )
    );
  }

  public handleClearFilter(): void {
    this.flightSearch = '';
  }

  public bookFlight(flight: Flight): void {
    this.flightService.addFlightToCurrentBookedFlights(flight);

    this._flights = this._flights.filter((f) => f.id !== flight.id);
  }
}
