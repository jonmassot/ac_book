import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Flight } from 'src/app/models/flight';

const planeBrands = ['Boeing', 'Airbus', 'Concorde', 'Embraer', 'Bombardier'];

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor() {}

  private bookedFlightsSubject = new BehaviorSubject<Flight[]>([]);
  public bookedFlights$: Observable<Flight[]> =
    this.bookedFlightsSubject.asObservable();

  public getFlights(): Observable<Flight[]> {
    const flights: Flight[] = [];

    for (let i = 1; i <= 10; i++) {
      flights.push({
        id: i,
        flightNumber: faker.string.alphanumeric(5).toUpperCase(),
        departure: faker.location.city(),
        arrival: faker.location.city(),
        departureTime: faker.date.future(),
        arrivalTime: faker.date.future(),
        price: parseFloat(faker.commerce.price()),
        cargoCapacity: faker.number.float({ min: 3000, max: 5000 }).toFixed(),
        planeAge: faker.number.float({ min: 5, max: 20 }).toFixed(),
        planeType:
          planeBrands[Math.ceil(Math.random() * planeBrands.length - 1)],
      });
    }

    return of(flights);
  }

  public getCurrentBookedFlights(): Flight[] {
    return this.bookedFlightsSubject.getValue();
  }

  public addFlightToCurrentBookedFlights(flight: Flight): void {
    const currentBookedFlights = this.bookedFlightsSubject.getValue();

    this.bookedFlightsSubject.next([...currentBookedFlights, flight]);
  }

  public removeFlightFromCurrentBookedFlights(id: number): void {
    const updated = this.bookedFlightsSubject
      .getValue()
      .filter((flight) => flight.id !== id);

    this.bookedFlightsSubject.next(updated);
  }
}
