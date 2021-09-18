import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Episode } from '../../../shared/models/episode.model';
import { SortEpisodesByEnum } from '../../../shared/models/sort-episodes-by.enum';
import { EpisodesService } from '../../../shared/services/episodes.service';

import { EpisodesStateModel } from './episodes';
import { LoadEpisodes } from './episodes.actions';

@State<EpisodesStateModel>({
  name: 'EpisodesState',
  defaults: {
    episodes: [],
    loading: false
  }
})
@Injectable()
export class EpisodesState {
  constructor(private episodesService: EpisodesService) {}

  @Selector()
  static getEpisodes({ episodes }: EpisodesStateModel): Episode[] {
    return episodes
  }

  @Selector()
  static getLoading({ loading }: EpisodesStateModel): boolean {
    return loading;
  }

  @Action(LoadEpisodes, { cancelUncompleted: true })
  loadEpisodes(ctx: StateContext<EpisodesStateModel>) {
    ctx.patchState({ loading: true })

    return this.episodesService.getEpisodes().pipe(tap(resp => ctx.patchState({ episodes: resp, loading: false })));
  }
}
