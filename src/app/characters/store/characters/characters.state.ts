import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Character } from '../../../shared/models/character.model';
import { CharactersService } from '../../../shared/services/characters.service';
import { CharacterDetailsState } from '../character-details/character-details.state';
import { CharactersStateModel } from './characters';
import { LoadCharacters, SelectCharacter, SetFilter } from './characters.actions';

@State<CharactersStateModel>({
  name: 'CharactersState',
  defaults: {
    characters: [],
    loading: false,
    selectedCharacter: null,
    filter: null
  },
  children: [CharacterDetailsState]
})
@Injectable()
export class CharactersState {
  constructor(private charactersService: CharactersService) {}

  @Selector()
  static getCharacters({ characters, filter }: CharactersStateModel): Character[] {
    return filter ? characters.filter(x => x.gender?.toLowerCase() === filter?.toLowerCase()) : characters;
  }

  @Selector()
  static getLoading({ loading }: CharactersStateModel): boolean {
    return loading;
  }

  @Selector()
  static getSelectedCharacter({ selectedCharacter }: CharactersStateModel): Character {
    return selectedCharacter;
  }

  @Action(LoadCharacters, { cancelUncompleted: true })
  loadCharacters(ctx: StateContext<CharactersStateModel>) {
    ctx.patchState({ loading: true });

    return this.charactersService.getCharacters().pipe(tap(resp => ctx.patchState({ characters: resp, loading: false })));
  }

  @Action(SelectCharacter)
  selectCharacter(ctx: StateContext<CharactersStateModel>, { character }: SelectCharacter) {
    ctx.patchState({ selectedCharacter: character });
    return EMPTY;
  }

  @Action(SetFilter)
  setFilter(ctx: StateContext<CharactersStateModel>, { filter }: SetFilter) {
    ctx.patchState({ filter });
    return EMPTY;
  }
}
