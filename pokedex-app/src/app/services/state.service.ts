import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import {Card, PokemonListItem, Subtypes, Supertypes, Types} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private pokemons$: BehaviorSubject<PokemonListItem[]> = new BehaviorSubject<PokemonListItem[]>([]);
  private pokemon$: ReplaySubject<Card> = new ReplaySubject<Card>(1);
  private types$: ReplaySubject<Types> = new ReplaySubject<Types>(1);
  private subtypes$: ReplaySubject<Subtypes> = new ReplaySubject<Subtypes>(1);
  private supertypes$: ReplaySubject<Supertypes> = new ReplaySubject<Supertypes>(1);
  private isPokemonsListLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private isPokemonLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


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

  public setTypes(types: string[]): void {
    this.types$.next(types);
  }

  public getTypes$(): Observable<Types> {
    return this.types$.asObservable();
  }

  public setSubtypes(subtypes: string[]): void {
    this.subtypes$.next(subtypes);
  }

  public getSubtypes$(): Observable<Subtypes> {
    return this.subtypes$.asObservable();
  }

  public setSupertypes(supertypes: string[]): void {

    this.supertypes$.next(supertypes);
  }

  public getSupertypes$(): Observable<Supertypes> {
    return this.supertypes$.asObservable();
  }

  public setIsPokemonsListLoading(isLoading: boolean): void {

    this.isPokemonsListLoading$.next(isLoading);
  }

  public getIsPokemonsListLoading(): Observable<boolean> {
    return this.isPokemonsListLoading$.asObservable();
  }

  public setIsPokemonLoading(isLoading: boolean): void {

    this.isPokemonLoading$.next(isLoading);
  }

  public getIsPokemonLoading(): Observable<boolean> {
    return this.isPokemonLoading$.asObservable();
  }


}
