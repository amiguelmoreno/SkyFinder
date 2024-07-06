import { Component, EventEmitter, Output } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-luggage",
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, MatIconModule],
  templateUrl: "./luggage.component.html",
})
export class LuggageComponent {
  luggage = "noluggage";

  @Output() luggageChange = new EventEmitter<string>();

  onSelectionChange(event: any) {
    this.luggageChange.emit(event.value);
  }
}
