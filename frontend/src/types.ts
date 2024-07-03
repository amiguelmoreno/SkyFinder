import { HttpHeaders, HttpContext, HttpParams } from "@angular/common/http";

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: "body";
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: "json";
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface Flight {
  id: number;
  origin: string;
  destination: string;
  departure_time: string;
  arrival_time: string;
}

export type Flights = Flight[];
