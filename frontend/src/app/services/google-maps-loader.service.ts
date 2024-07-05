// google-maps-loader.service.ts

import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class GoogleMapsLoaderService {
  private mapsLoaded: boolean = false;

  constructor() {
    this.loadGoogleMaps(); // Cargar Google Maps al iniciar el servicio
  }

  private loadGoogleMaps(): void {
    console.log("helooooooo");

    if (this.mapsLoaded) {
      return;
    }

    const apiKey = environment.googleAPIKEY;

    const scriptContent = `
      ((g) => {
        var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
        b = b[c] || (b[c] = {});
        var d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = () => h || (h = new Promise(async (f, n) => {
          await (a = m.createElement("script"));
          e.set("libraries", [...r] + "");
          for (k in g) e.set(k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g[k]);
          e.set("callback", c + ".maps." + q);
          a.src = \`https://maps.\${c}apis.com/maps/api/js?\` + e;
          d[q] = f;
          a.onerror = () => (h = n(Error(p + " could not load.")));
          a.nonce = m.querySelector("script[nonce]")?.nonce || "";
          m.head.append(a);
        }));
        d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
      })({
        v: "weekly",
        key: "${apiKey}",
      });
    `;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = scriptContent;

    script.onload = () => {
      this.mapsLoaded = true;
    };

    script.onerror = (error: any) => {
      console.error("Error al cargar Google Maps", error);
    };

    document.head.appendChild(script);
  }

  public isMapsLoaded(): boolean {
    return this.mapsLoaded;
  }
}
