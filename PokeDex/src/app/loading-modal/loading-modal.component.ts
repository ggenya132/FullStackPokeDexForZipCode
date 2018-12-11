import { Component, OnInit } from "@angular/core";
import { PokeService } from "../poke.service";
@Component({
  selector: "app-loading-modal",
  templateUrl: "./loading-modal.component.html",
  styleUrls: ["./loading-modal.component.scss"]
})
export class LoadingModalComponent implements OnInit {
  constructor(private pokeService: PokeService) {}

  ngOnInit() {}
}
