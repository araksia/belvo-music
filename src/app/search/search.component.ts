import { Component, OnInit } from "@angular/core";
import { SearchService } from "../_services/search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  searchFilter: string;
  constructor(private fs: SearchService) {}

  ngOnInit() {}

  onKeyup(event) {
    this.fs.updateFilter(event.target.value);
  }

  clear() {
    this.fs.updateFilter("");
    this.searchFilter = "";
  }
}