import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from "@angular/core";
import {
  MatDatepickerInput,
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { provideNativeDateAdapter } from "@angular/material/core";
import { FormsModule } from "@angular/forms";

/** @title Basic datepicker */
@Component({
  selector: "datepicker-overview-example",
  templateUrl: "datepicker.component.html",
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  @Output() departureDateChange = new EventEmitter<Date>();
  @Output() returnDateChange = new EventEmitter<Date>();

  departureDate: Date | null = null;
  returnDate: Date | null = null;

  constructor() {
    this.departureDate = new Date(); // Por ejemplo, inicializar con la fecha actual
    this.returnDate = new Date();
  }

  onDepartureDateSelected(event: MatDatepickerInputEvent<Date>) {
    this.departureDate = event.value;
    console.log(this.departureDate);
  }

  onReturnDateSelected(event: MatDatepickerInputEvent<Date>) {
    this.returnDate = event.value;
    console.log(this.returnDate);
  }
}
