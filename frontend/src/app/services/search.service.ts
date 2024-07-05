import { Injectable } from "@angular/core";
import { Flights } from "../../types";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  private searchCriteria: any;
  private searchResults: any = [];

  setSearchCriteria(criteria: any) {
    this.searchCriteria = criteria;
  }

  getSearchCriteria() {
    return this.searchCriteria;
  }

  setSearchResults(results: any) {
    this.searchResults = results;
    console.log(results);
  }

  getSearchResults() {
    return this.searchResults;
  }
}
