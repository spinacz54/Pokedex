import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FilteringProperties, PokemonQuery} from "../../models/models";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'filter-component',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() public selectOptions: string[] = Object.values(FilteringProperties);
  @Output() public filterClick: EventEmitter<PokemonQuery> = new EventEmitter();
  @Output() public clearClick: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;

  constructor() {
    this.form = this.createNewForm();
  }

  public onFilterClick(): void {
    this.filterClick.emit({property: this.form.get('property')?.value, value: this.form.get('value')?.value});
  }

  public onClearClick(): void {
    this.form = this.createNewForm();
    this.clearClick.emit();
  }

  private createNewForm(): FormGroup {
    return new FormGroup({
      property: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')])
    })
  }

}
