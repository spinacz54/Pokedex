import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AllCards} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private apiUrl = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<AllCards> {
    return this.http.get<any>(this.apiUrl);
  }
}
