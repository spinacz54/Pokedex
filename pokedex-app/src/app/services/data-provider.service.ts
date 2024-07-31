import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AllCardsResponse, Card, PokemonQuery, SimpleTypes, SingleCardResponse} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private apiUrl = 'https://api.pokemontcg.io/v2/';

  constructor(private http: HttpClient) { }

  public getPokemons$(query?: PokemonQuery): Observable<AllCardsResponse> {
    return this.http.get<any>(this.apiUrl + 'cards' + this.parseQuery(query));
  }

  public getPokemon$(id: string): Observable<SingleCardResponse> {
    return this.http.get<any>(this.apiUrl + 'cards/' + id);
  }

  public getTypes$(): Observable<SimpleTypes> {
    return this.http.get<any>(this.apiUrl + 'types');
  }

  public getSubtypes$(): Observable<SimpleTypes> {
    return this.http.get<any>(this.apiUrl + 'subtypes');
  }

  public getSupertypes$(): Observable<SimpleTypes> {
    return this.http.get<any>(this.apiUrl + 'supertypes');
  }

  private parseQuery(query?: PokemonQuery): string {
    return query?.property && query?.value ? `?q=${query.property.toLowerCase()}:${query.value}` : '';
  }
}
