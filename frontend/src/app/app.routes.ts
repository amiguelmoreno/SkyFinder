import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FlightsComponent } from "./flights/flights.component";
import { NgModule } from "@angular/core";
import { MapsComponent } from "./maps/maps.component";

export const routes: Routes = [
  { path: "", component: MapsComponent },
  { path: "flights", component: FlightsComponent },
  { path: "maps", component: MapsComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
