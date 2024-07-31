import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ActionFacadeService} from "../../facades/action-facade.service";
import {ViewFacadeService} from "../../facades/view-facade.service";
import {Card} from "../../models/models";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  public pokemon: Card;
  public form: FormGroup;
  public isInEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private actionFacadeService: ActionFacadeService, private viewFacadeService: ViewFacadeService ) {
    this.form = this.createNewForm();
  }

  ngOnInit(): void {
    const id: string | null= this.route.snapshot.paramMap.get('id');
    this.viewFacadeService.getPokemon$().subscribe((pokemon: Card) => {
      this.pokemon = pokemon;
      this.updateForm(pokemon)
      console.log(this.form.get('supertype')?.value);
    });
    id && this.actionFacadeService.loadPokemon(id);
  }

  private createNewForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      hp: new FormControl('', [Validators.required]),
      evolvesFrom: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      supertype: new FormControl('', [Validators.required])
    })
  }

  private updateForm(pokemon: Card): void {
    if(!!pokemon) {
      this.form.get('name')?.patchValue(pokemon.name);
      this.form.get('id')?.patchValue(pokemon.id);
      this.form.get('hp')?.patchValue(pokemon.hp);
      this.form.get('evolvesFrom')?.patchValue(pokemon.evolvesFrom);
      this.form.get('type')?.patchValue(pokemon.types[0]);
      this.form.get('supertype')?.patchValue(pokemon.supertype);
    }
  }

  public getTypeControl(): FormControl {
    return this.form.get('type') as FormControl;
  }

}
