import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Card, PokemonListItem, Subtypes, Supertypes, Types} from "../models/models";
import {StateService} from "../services/state.service";

@Injectable({
  providedIn: 'root'
})
export class ViewFacadeService {

  constructor(private stateService: StateService) {
  }

  public getPokemons$(): Observable<PokemonListItem[]> {
    return this.stateService.getPokemons$();
  }

  public getPokemon$(): Observable<Card> {
    return this.stateService.getPokemon$();
  }

  public getTypes$(): Observable<Types> {
    return this.stateService.getTypes$();
  }

  public getSubtypes$(): Observable<Subtypes> {
    return this.stateService.getSubtypes$();
  }

  public getSupertypes$(): Observable<Supertypes> {
    return this.stateService.getSupertypes$();
  }

  public getIsPokemonsListLoading$(): Observable<boolean> {
    return this.stateService.getIsPokemonsListLoading$();
  }

  public getIsPokemonLoading$(): Observable<boolean> {
    return this.stateService.getIsPokemonLoading$();
  }
}
