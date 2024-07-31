import { Injectable } from '@angular/core';
import {StateService} from "../services/state.service";
import {DataProviderService} from "../services/data-provider.service";
import {
  AllCardsResponse,
  Card,
  PokemonListItem,
  PokemonQuery,
  SingleCardResponse
} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class ActionFacadeService {

  constructor(private stateService: StateService, private dataProviderService: DataProviderService) { }

  public loadPokemons(query?: PokemonQuery): void {
    let pokemons: PokemonListItem[];
    this.dataProviderService.getPokemons$(query).subscribe((cards: AllCardsResponse) => {
      pokemons = cards.data.map((card: Card) => ({id: card!.id, name: card!.name}))
      this.stateService.setPokemons(pokemons);
    })
  }

  public loadPokemon(id: string): void {
    this.dataProviderService.getPokemon$(id).subscribe((singleCardResponse: SingleCardResponse) => {
      this.stateService.setPokemon(singleCardResponse.data);
    })
  }
}
