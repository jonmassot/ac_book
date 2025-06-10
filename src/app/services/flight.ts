import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/flight';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private httpClient: HttpClient) {}

  private bookedFlightsSubject = new BehaviorSubject<Flight[]>([]);
  public bookedFlights$: Observable<Flight[]> =
    this.bookedFlightsSubject.asObservable();

  public getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>('/api/flight');
  }

  public getCurrentBookedFlights(): Flight[] {
    return this.bookedFlightsSubject.getValue();
  }

  public addFlightToCurrentBookedFlights(flight: Flight): void {
    const current = this.bookedFlightsSubject.getValue();
    this.bookedFlightsSubject.next([...current, flight]);
  }

  public removeFlightFromCurrentBookedFlights(id: number): void {
    const updated = this.bookedFlightsSubject
      .getValue()
      .filter((flight) => flight.id !== id);

    this.bookedFlightsSubject.next(updated);
  }
}
