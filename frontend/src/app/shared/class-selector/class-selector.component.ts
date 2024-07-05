import { Component, EventEmitter, Output } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-class-selector",
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, MatIconModule],
  templateUrl: "./class-selector.component.html",
})
export class ClassSelectorComponent {
  selectedClass = "tourist";

  @Output() classChange = new EventEmitter<string>();

  onSelectionChange(event: any) {
    this.classChange.emit(event.value);
  }
}
