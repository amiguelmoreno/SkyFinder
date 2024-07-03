import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { Flights } from "../../types";

@Injectable({
  providedIn: "root",
})
export class FlightsService {
  constructor(private apiService: ApiService) {}

  getFlights = (url: string, params: any): Observable<Flights> => {
    return this.apiService.get(url, params);
  };
}
