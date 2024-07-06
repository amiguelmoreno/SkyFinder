import { Component } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FlightsService } from "../services/flights.service";
import { SearchService } from "../services/search.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  selectedFlightType: string = "round";
  presetPassengers: string = "1";
  selectedClass: string = "tourist";
  selectedOrigin: string = "";
  selectedDestination: string = "";
  // luggage: string = "noluggage";

  locations = [
    { origin: "New York" },
    { origin: "London" },
    { origin: "Paris" },
  ];

  constructor(
    private flightsService: FlightsService,
    private searchService: SearchService,
    private router: Router
  ) {}

  searchFlights() {
    const criteria = {
      flightType: this.selectedFlightType,
      passengers: this.presetPassengers,
      travelClass: this.selectedClass,
      origin: this.selectedOrigin,
      destination: this.selectedDestination,
    };

    console.log(criteria);

    this.searchService.setSearchCriteria(criteria);

    this.flightsService.getOrigins().subscribe((results) => {
      this.searchService.setSearchResults(results);
      //this.router.navigate(["/flights"]);
    });
  }
}
