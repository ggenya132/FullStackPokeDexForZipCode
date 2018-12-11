import { Component, OnInit } from "@angular/core";
import { PokeService } from "../poke.service";
@Component({
  selector: "app-poke-entry",
  templateUrl: "./poke-entry.component.html",
  styleUrls: ["./poke-entry.component.scss"]
})
export class PokeEntryComponent implements OnInit {
  isLoading = false;
  constructor(private pokeService: PokeService) {
    this.pokeService.isLoadingChange.subscribe(isLoading => {
      console.log(" getting new loading state", ": ", isLoading);
      this.isLoading = isLoading;
    });
  }

  ngOnInit() {}
}
