export interface Flight {
    id: number;
    flightNumber: string;
    departure: string;
    arrival: string;
    departureTime: Date;
    arrivalTime: Date;
    price: number;
}