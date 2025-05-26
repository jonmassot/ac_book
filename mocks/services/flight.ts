import { faker } from '@faker-js/faker';
import { Flight } from 'src/app/models/flight';

export class FlightService {
  constructor() { }

  getFlights(): Flight[] {
    const flights: Flight[] = [];
    for (let i = 1; i <= 10; i++) {
      flights.push({
        id: i,
        flightNumber: faker.string.alphanumeric(5).toUpperCase(),
        departure: faker.location.city(),
        arrival: faker.location.city(),
        departureTime: faker.date.future(),
        arrivalTime: faker.date.future(),
        price: parseFloat(faker.commerce.price())
      });
    }
    return flights;
  }
}