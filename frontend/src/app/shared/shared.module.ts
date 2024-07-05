import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FlightTypeSelectorComponent } from "./flight-type-selector/flight-type-selector.component";
import { PassengerSelectorComponent } from "./passenger-selector/passenger-selector.component";
import { ClassSelectorComponent } from "./class-selector/class-selector.component";
import { LocationSelectorComponent } from "./location-selector/location-selector.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { SearchButtonComponent } from "./search-button/search-button.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FlightTypeSelectorComponent,
    PassengerSelectorComponent,
    ClassSelectorComponent,
    LocationSelectorComponent,
    DatepickerComponent,
    SearchButtonComponent,
  ],
  exports: [
    FlightTypeSelectorComponent,
    PassengerSelectorComponent,
    ClassSelectorComponent,
    LocationSelectorComponent,
    DatepickerComponent,
    SearchButtonComponent,
  ],
})
export class SharedModule {}
