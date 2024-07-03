import { Component } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { FlightsService } from "../services/flights.service";
import { Flights } from "../../types";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" },
  ];

  flights: Flights = [];

  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    this.flightsService
      .getFlights("http://localhost:3000/flights", {})
      .subscribe({
        next: (flights: Flights) => {
          console.log("Received flights:", flights);
          this.flights = flights;
        },
        error: (error) => {
          console.error("Error fetching flights:", error);
        },
        complete: () => {
          console.log("Flights request completed.");
          console.log(this.flights);
        },
      });
  }
}
