import {Component, Input, OnInit} from '@angular/core';
import {PokemonListItem, PokemonQuery} from "../../models/models";
import {Router} from "@angular/router";
import {ActionFacadeService} from "../../facades/action-facade.service";
import {ViewFacadeService} from "../../facades/view-facade.service";
import {Observable} from "rxjs";

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  @Input() public listItems: PokemonListItem[] = [];
  public pokemons$!: Observable<PokemonListItem[]>;
  public displayedColumns: string[] = ['id', 'name', 'details'];

  constructor(private router: Router, private actionFacadeService: ActionFacadeService, private viewFacadeService: ViewFacadeService) {}

  public ngOnInit(): void {
    this. pokemons$ = this.viewFacadeService.getPokemons$();
    this.actionFacadeService.loadPokemons();
  }

  public onFilterClick(query: PokemonQuery): void {
    this.actionFacadeService.loadPokemons(query);
  }

  public onClearClick(): void {
    this.actionFacadeService.loadPokemons();
  }

  public onDetailsClick(id: string): void {
    this.router.navigate(['/pokemon', id]);
  }
}
