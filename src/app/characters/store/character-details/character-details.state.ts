import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { CharacterDetails } from '../../../shared/models/character-details.model';

import { CharactersService } from '../../../shared/services/characters.service';
import { CharacterDetailsStateModel } from './character-details';
import { LoadCharacterDetails } from './character-details.actions';

@State<CharacterDetailsStateModel>({
  name: 'CharacterDetailsState',
  defaults: {
    character: null,
    loading: false
  }
})
@Injectable()
export class CharacterDetailsState {
  constructor(private charactersService: CharactersService) {}

  @Selector()
  static getCharacterDetails({ character }: CharacterDetailsStateModel): CharacterDetails {
    return character;
  }

  @Selector()
  static getLoading({ loading }: CharacterDetailsStateModel): boolean {
    return loading;
  }

  @Action(LoadCharacterDetails, { cancelUncompleted: true })
  loadCharacterDetails(ctx: StateContext<CharacterDetailsStateModel>, { id }: LoadCharacterDetails) {
    ctx.patchState({ loading: true });

    return this.charactersService.getCharacterDetails(id).pipe(tap(resp => ctx.patchState({ character: resp })));
  }
}
