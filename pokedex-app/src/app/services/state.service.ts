import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import {Card, PokemonListItem} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private pokemons$: BehaviorSubject<PokemonListItem[]> = new BehaviorSubject<PokemonListItem[]>([]);
  private pokemon$: ReplaySubject<Card> = new ReplaySubject<Card>(1);


  public setPokemons(pokemons: PokemonListItem[]): void {
    this.pokemons$.next(pokemons);
  }

  public getPokemons$(): Observable<PokemonListItem[]> {
    return this.pokemons$.asObservable();
  }

  public setPokemon(pokemon: Card): void {
    this.pokemon$.next(pokemon);
  }

  public getPokemon$(): Observable<Card | undefined> {
    return this.pokemon$.asObservable();
  }
}
