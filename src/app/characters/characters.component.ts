import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { CharacterDetails } from '../shared/models/character-details.model';
import { Character } from '../shared/models/character.model';
import { LoadCharacterDetails } from './store/character-details/character-details.actions';
import { CharacterDetailsState } from './store/character-details/character-details.state';
import { LoadCharacters, SelectCharacter, SetFilter } from './store/characters/characters.actions';
import { CharactersState } from './store/characters/characters.state';
import { ProfileState } from '../shared/store/profile/profile.state';
import { EpisodesService } from '../shared/services/episodes.service';

@Component({
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  @Select(CharactersState.getCharacters) characters$;
  @Select(CharactersState.getLoading) loading$: Observable<boolean>;
  @Select(CharactersState.getSelectedCharacter) selectedCharacter$;

  @Select(CharacterDetailsState.getLoading) loadingDetails$: Observable<boolean>;

  constructor(private store: Store, private episodesService: EpisodesService) {
    this.store.dispatch(new LoadCharacters());
  }
  
  @Select(CharacterDetailsState.getCharacterDetails) characterDetails$;

  public onSelectCharacter(character: Character) {
    this.store.dispatch(new SelectCharacter(character));
    this.store.dispatch(new LoadCharacterDetails(character.url));
  }

  public onFilterChange(filter: string) {
    this.store.dispatch(new SetFilter(filter));;
  }
}
