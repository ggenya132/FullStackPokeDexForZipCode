import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { debug } from "util";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PokeService {
  //not the best practice
  pokemonSpriteDevEndpoint: string =
    "http://ec2-54-167-97-243.compute-1.amazonaws.com:9001/pokemon/";
  pokedexDevEndpoint: string =
    "http://ec2-54-167-97-243.compute-1.amazonaws.com:9001/pokemon/pokedex/";

  pokemonSpriteEndpoint = "https://lit-coast-36788.herokuapp.com/pokemon/";
  pokedexEndpoint = "https://lit-coast-36788.herokuapp.com/pokemon/pokedex/";

  pokedexEntry = "";
  spriteImageEndpoint = "";
  loading;
  pokemonName = "";

  currentPokePayload = {};

  private isLoadingSubject = new Subject<any>();
  public isLoadingChange = this.isLoadingSubject.asObservable();

  private pokePayloadSubject = new Subject<any>();
  public pokePayloadChange = this.pokePayloadSubject.asObservable();

  constructor(private http: HttpClient) {}

  emitPokepayloadChange() {
    this.pokePayloadSubject.next(this.currentPokePayload);
  }

  emitLoadingStateChange() {
    this.loading = !this.loading;

    console.log(this.loading);

    this.isLoadingSubject.next(this.loading);
  }

  getPokemonData(pokemonId) {
    let pokemonSpriteEndpoint = `${this.pokemonSpriteEndpoint}${pokemonId}`;
    let pokedexEndpoint = `${this.pokedexEndpoint}${pokemonId}`;

    let pokedexRequest = this.http.get(pokedexEndpoint);
    let pokeSpriteRequest = this.http.get(pokemonSpriteEndpoint);

    return forkJoin([pokedexRequest, pokeSpriteRequest]);
  }

  callPokedex(pokemonId) {
    this.emitLoadingStateChange();
    this.getPokemonData(pokemonId).subscribe(data => {
      this.handlePokePayload(data);
    });
  }

  handlePokePayload(mergedPayload) {
    let [pokedexData, spriteData] = mergedPayload;
    let {
      sprites: { front_default: spriteImageEndpoint }
    } = spriteData;
    let { flavor_text_entries, names } = pokedexData;
    const INDEX_OF_ENGLISH_FLAVORTEXT_ENTRY = 1;
    const INDEX_OF_ENGLISH_NAME_ENTRY = 0;
    //
    let { flavor_text: pokedexEntry } = flavor_text_entries[
      INDEX_OF_ENGLISH_FLAVORTEXT_ENTRY
    ];
    let { name: pokemonName } = names[INDEX_OF_ENGLISH_NAME_ENTRY];

    this.pokedexEntry = pokedexEntry;
    this.spriteImageEndpoint = spriteImageEndpoint;
    this.pokemonName = pokemonName;

    this.currentPokePayload = {
      pokedexEntry,
      spriteImageEndpoint,
      pokemonName
    };

    console.log(this.pokemonSpriteEndpoint);
    console.log(this.currentPokePayload);

    this.emitPokepayloadChange();

    this.emitLoadingStateChange();
  }
  getPokemonPokedexData(pokemonId) {
    let endpoint = `${this.pokedexEndpoint}${pokemonId}`;
    return this.http.get(endpoint);
  }
}
