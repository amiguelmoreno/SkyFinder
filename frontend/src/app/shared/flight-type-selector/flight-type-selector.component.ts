import { Component, EventEmitter, Output } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-flight-type-selector",
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, MatIconModule],
  templateUrl: "./flight-type-selector.component.html",
})
export class FlightTypeSelectorComponent {
  selectedFlightType = "round";

  @Output() flightTypeChange = new EventEmitter<string>();

  onSelectionChange(event: any) {
    this.flightTypeChange.emit(event.value);
  }
}
