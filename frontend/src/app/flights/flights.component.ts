import { NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@Component({
  selector: "app-flight-results",
  standalone: true,
  imports: [SharedModule, NgFor, NgIf],
  templateUrl: "./flights.component.html",
})
export class FlightsComponent implements OnInit {
  flightResults: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Recupera los resultados de vuelos de los queryParams
    this.route.queryParams.subscribe((params) => {
      if (params["results"]) {
        this.flightResults = JSON.parse(params["results"]);
      }
    });
  }
}
