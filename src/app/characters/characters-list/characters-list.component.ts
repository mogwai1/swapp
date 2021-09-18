import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../shared/models/character.model';
import { Store, Select } from '@ngxs/store';

@Component({
  selector: 'characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {
  @Input() characters: any;
  @Input() loading;
  @Input() selectedCharacter: any;

  @Output() selectCharacter = new EventEmitter<Character>();
  @Output() filterChange = new EventEmitter<string>();

  constructor() {}

  public items = ['', 'Male', 'Female'];

  onFilterChange(filter: string) {
    this.filterChange.emit(filter);
  }

  public onCharacterClick(character: Character) {
    this.selectCharacter.emit(character);
  }
}
