import { Component, EventEmitter, Output } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-passenger-selector",
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, MatIconModule],
  templateUrl: "./passenger-selector.component.html",
})
export class PassengerSelectorComponent {
  presetPassengers = "1";

  @Output() passengersChange = new EventEmitter<string>();

  onSelectionChange(event: any) {
    this.passengersChange.emit(event.value);
  }
}
