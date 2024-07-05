import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectChange, MatSelectModule } from "@angular/material/select";
import { FlightsService } from "../../services/flights.service";
import { elementAt } from "rxjs";

@Component({
  selector: "app-location-selector",
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, MatIconModule, NgFor],
  templateUrl: "./location-selector.component.html",
})
export class LocationSelectorComponent {
  @Input() label: string;
  @Input() locations: { origin: string }[] = [];
  @Output() locationChange = new EventEmitter<string>();

  selectedLocation: string;

  constructor(private flightsService: FlightsService) {
    this.label = "";
    this.locations = [];
    this.selectedLocation = "";
  }

  ngOnInit() {
    this.flightsService.getOrigins().subscribe(
      (origins) => {
        this.locations = origins;
      },
      (error) => {
        console.error("Error fetching origins:", error);
      }
    );
  }

  onLocationChange(event: MatSelectChange) {
    this.selectedLocation = event.value;
    this.locationChange.emit(this.selectedLocation);
  }

  trackByLocation(index: number, location: any): string {
    return location;
  }
}
