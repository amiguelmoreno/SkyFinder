import { Component, EventEmitter, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-search-button",
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: "./search-button.component.html",
})
export class SearchButtonComponent {
  @Output() searchClick = new EventEmitter<void>();

  onSearchClick() {
    this.searchClick.emit();
  }
}
