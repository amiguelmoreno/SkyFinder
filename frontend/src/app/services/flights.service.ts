import { Flights } from "../../types";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class FlightsService {
  private apiUrl = "http://localhost:3000/flights"; // URL de la API

  constructor(private apiService: ApiService, private http: HttpClient) {}

  getOrigins(): Observable<{ origin: string }[]> {
    return this.apiService.get<any[]>(
      `http://localhost:3000/origins`,
      {}
    ); /* .pipe(
      map((response) => {
        return response.map((flight) => ({ origin: flight.origin }));
      })
    ); */
  }

  getFlights(filters: any): Observable<Flights> {
    const options = {
      params: filters,
    };
    return this.apiService.get<Flights>(this.apiUrl, options);
  }
}
