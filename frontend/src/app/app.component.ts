import { CommonModule } from "@angular/common";
import {} from "@angular/common/http";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { ReactiveFormsModule } from "@angular/forms";
import { GoogleMapsModule } from "@angular/google-maps";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    GoogleMapsModule,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "skyfinder";
}
