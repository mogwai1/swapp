import { Episode } from '../../../shared/models/episode.model';

export interface EpisodesStateModel {
  episodes: Episode[];
  loading: boolean;
}
