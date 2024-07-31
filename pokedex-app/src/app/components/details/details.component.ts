import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActionFacadeService} from "../../facades/action-facade.service";
import {ViewFacadeService} from "../../facades/view-facade.service";
import {Card, Subtypes, Supertypes, Types} from "../../models/models";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit, OnDestroy{
  public pokemon: Card;
  public isPokemonLoading$!: Observable<boolean>;
  public form: FormGroup;
  public types: Types;
  public subtypes: Subtypes;
  public supertypes: Supertypes;
  public isInEditMode: boolean = false;
  public typesPlaceholder: string = '';
  public supertypePlaceholder: string = '';
  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private actionFacadeService: ActionFacadeService, private viewFacadeService: ViewFacadeService) {
    this.form = this.createNewForm();
  }

  ngOnInit(): void {
    const id: string | null= this.route.snapshot.paramMap.get('id');
    this.subscribeToData();
    id && this.loadData(id);
  }

  private createNewForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      hp: new FormControl('', [Validators.required]),
      evolvesFrom: new FormControl('', [Validators.required]),
      types: new FormControl('', [Validators.required]),
      subtypes: new FormControl('', [Validators.required]),
      supertype: new FormControl('', [Validators.required])
    })
  }

  private updateForm(pokemon?: Card): void {
    if(!!pokemon) {
      this.form.get('name')?.patchValue(pokemon.name);
      this.form.get('id')?.patchValue(pokemon.id);
      this.form.get('hp')?.patchValue(pokemon.hp);
      this.form.get('evolvesFrom')?.patchValue(pokemon.evolvesFrom ?? 'None');
      this.form.get('types')?.patchValue(pokemon.types);
      this.form.get('subtypes')?.patchValue(pokemon.subtypes);
      this.form.get('supertype')?.patchValue(pokemon.supertype);
      this.supertypePlaceholder = pokemon.supertype;
    }
    this.isInEditMode ? this.form.enable() : this.form.disable();
  }

  private subscribeToData(): void {
    this.subscriptions.push(this.viewFacadeService.getPokemon$().subscribe((pokemon: Card) => {
      this.pokemon = pokemon;
      this.updateForm(pokemon)
    }));
    this.subscriptions.push(this.viewFacadeService.getTypes$().subscribe((types: Types) => {
      this.types = types}));
    this.subscriptions.push(this.viewFacadeService.getSubtypes$().subscribe((subtypes: Subtypes) => {
      this.subtypes = subtypes}));
    this.subscriptions.push(this.viewFacadeService.getSupertypes$().subscribe((supertypes: Supertypes) => {
      this.supertypes = supertypes}));
    this.isPokemonLoading$ = this.viewFacadeService.getIsPokemonLoading$();

  }

  private loadData(pokemonId: string): void {
    this.actionFacadeService.loadPokemon(pokemonId);
    this.actionFacadeService.loadTypes();
    this.actionFacadeService.loadSubtypes();
    this.actionFacadeService.loadSupertypes();
  }

  public onSaveClick(): void {
    this.isInEditMode = false;
    this.updateForm()
  }

  public onEditClick(): void {
    this.isInEditMode = true;
    this.updateForm()
  }

  public onBackClick(): void {
    this.router.navigate(['/list']);
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }

}
