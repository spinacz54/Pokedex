import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {AllCardsResponse, Card, PokemonQuery, SimpleTypes, SingleCardResponse} from "../models/models";
import {DataProviderService} from "../services/data-provider.service";
import {StateService} from "../services/state.service";

@Injectable({
  providedIn: 'root'
})
export class ActionFacadeService implements OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(private stateService: StateService, private dataProviderService: DataProviderService) {
  }

  public loadPokemons(query?: PokemonQuery): void {
    this.stateService.setIsPokemonsListLoading(true);
    this.subscriptions.push(this.dataProviderService.getPokemons$(query).subscribe((cards: AllCardsResponse) => {
      this.stateService.setPokemons(cards.data.map((card: Card) => ({id: card!.id, name: card!.name})));
      this.stateService.setIsPokemonsListLoading(false);
    }));
  }

  public loadPokemon(id: string): void {
    this.stateService.setIsPokemonLoading(true);
    this.subscriptions.push(this.dataProviderService.getPokemon$(id).subscribe((singleCardResponse: SingleCardResponse) => {
      this.stateService.setPokemon(singleCardResponse.data);
      this.stateService.setIsPokemonLoading(false);
    }));
  }

  public loadTypes(): void {
    this.subscriptions.push(this.dataProviderService.getTypes$().subscribe((types: SimpleTypes) => {
      this.stateService.setTypes(types.data);
    }));
  }

  public loadSubtypes(): void {
    this.subscriptions.push(this.dataProviderService.getSubtypes$().subscribe((subtypes: SimpleTypes) => {
      this.stateService.setSubtypes(subtypes.data);
    }));
  }

  public loadSupertypes(): void {
    this.subscriptions.push(this.dataProviderService.getSupertypes$().subscribe((supertypes: SimpleTypes) => {
      this.stateService.setSupertypes(supertypes.data);
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }
}
