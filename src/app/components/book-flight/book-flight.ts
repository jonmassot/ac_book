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
  ];

  constructor(private usersService: FlightService) {
    this.usersService.getFlights().subscribe({
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
}
