import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {ActionFacadeService} from "../../facades/action-facade.service";
import {ViewFacadeService} from "../../facades/view-facade.service";
import {PokemonListItem, PokemonQuery} from "../../models/models";

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  @Input() public listItems: PokemonListItem[] = [];

  public pokemons$!: Observable<PokemonListItem[]>;
  public isPokemonsListLoading$!: Observable<boolean>;

  public displayedColumns: string[] = ['id', 'name', 'details'];

  constructor(
    private router: Router,
    private actionFacadeService: ActionFacadeService,
    private viewFacadeService: ViewFacadeService) {
  }

  public ngOnInit(): void {
    this.pokemons$ = this.viewFacadeService.getPokemons$();
    this.isPokemonsListLoading$ = this.viewFacadeService.getIsPokemonsListLoading$();
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
