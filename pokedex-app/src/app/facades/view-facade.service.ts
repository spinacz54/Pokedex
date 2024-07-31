import { Injectable } from '@angular/core';
import {StateService} from "../services/state.service";
import {Observable} from "rxjs";
import {Card, PokemonListItem} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class ViewFacadeService {

  constructor(private stateService: StateService) { }

  public getPokemons$(): Observable<PokemonListItem[]> {
    return this.stateService.getPokemons$();
  }

  public getPokemon$(): Observable<Card> {
    return this.stateService.getPokemon$();
  }
}
