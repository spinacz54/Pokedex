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
    this.stateService.setIsPokemonsListLoading(true);
    let pokemons: PokemonListItem[];
    this.dataProviderService.getPokemons$(query).subscribe((cards: AllCardsResponse) => {
      pokemons = cards.data.map((card: Card) => ({id: card!.id, name: card!.name}))
      this.stateService.setPokemons(pokemons);
      this.stateService.setIsPokemonsListLoading(false);
    })
  }

  public loadPokemon(id: string): void {
    this.stateService.setIsPokemonLoading(true);
    this.dataProviderService.getPokemon$(id).subscribe((singleCardResponse: SingleCardResponse) => {
      this.stateService.setPokemon(singleCardResponse.data);
      this.stateService.setIsPokemonLoading(false);
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
