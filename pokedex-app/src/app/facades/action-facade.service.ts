import { Injectable } from '@angular/core';
import {StateService} from "../services/state.service";
import {DataProviderService} from "../services/data-provider.service";
import {
  AllCardsResponse,
  Card,
  PokemonListItem,
  PokemonQuery, SimpleTypes,
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

  public loadTypes(): void {
    this.dataProviderService.getTypes$().subscribe((types: SimpleTypes) => {
      this.stateService.setTypes(types.data);
    })
  }

  public loadSubtypes(): void {
    this.dataProviderService.getSubtypes$().subscribe((subtypes: SimpleTypes) => {
      this.stateService.setSubtypes(subtypes.data);
    })
  }

  public loadSupertypes(): void {
    this.dataProviderService.getSupertypes$().subscribe((supertypes: SimpleTypes) => {
      this.stateService.setSupertypes(supertypes.data);
    })
  }
}
