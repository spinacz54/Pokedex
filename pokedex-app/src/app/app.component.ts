import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "./services/data-provider.service";
import {AllCards, Card, PokemonListItem} from "./models/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public pokemonsList: PokemonListItem[] = [];



  constructor(private dataProviderService: DataProviderService) {
  }

  public ngOnInit(): void {
    console.log('init')
      this.dataProviderService.getPokemons().subscribe((cards: AllCards) => {
        this.pokemonsList = cards.data.map((card: Card) => ({id: card.id, name: card.name}))
        console.log(this.pokemonsList);
      })
  }


}
