import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Character } from '../shared/models/character.model';

import { Episode } from '../shared/models/episode.model';
import { SortEpisodesByEnum } from '../shared/models/sort-episodes-by.enum';
import { CharactersService } from '../shared/services/characters.service';
import { LoadEpisodes } from './store/episodes/episodes.actions';
import { EpisodesState } from './store/episodes/episodes.state';

@Component({
  templateUrl: './episodes.container.html'
})
export class EpisodesContainer {
  @Select(EpisodesState.getEpisodes) episodes$: Observable<Episode[]>;
  @Select(EpisodesState.getLoading) loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.store.dispatch(new LoadEpisodes());
  }
}
