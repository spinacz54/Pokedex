import {Component, Input} from '@angular/core';
import {PokemonListItem} from "../../models/models";

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() public listItems: PokemonListItem[] = [];
}
