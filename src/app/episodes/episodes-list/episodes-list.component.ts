import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnChanges, Input, Output, ViewEncapsulation } from '@angular/core';

import { Episode } from '../../shared/models/episode.model';
import { SortEpisodesByEnum } from '../../shared/models/sort-episodes-by.enum';
import { EpisodesService } from '../../shared/services/episodes.service';

@Component({
  selector: 'episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss'],
  encapsulation: ViewEncapsulation.None
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodesListComponent {
  @Input() episodes: Episode[];
  @Input() loading: boolean;

  constructor(private cdref: ChangeDetectorRef, private episodesService: EpisodesService) {}

  ngOnInit() {
    this.loading = true;
    this.episodesService.getEpisodes().subscribe(res => {
      this.episodes = res;
      this.loading = false;
    });
  }

  public onSortByDate() {
    this.sortBy(this.episodes, SortEpisodesByEnum.byDate);
  }

  public onSortByNumber() {
    this.sortBy(this.episodes, SortEpisodesByEnum.byNumber);
  }

  // сортируем по дате или по номеру
  sortBy(array: Episode[], sortBy: SortEpisodesByEnum) {
    const episodes = [...array]; // создаем новый объект
    episodes.sort((a, b) => {
      if (sortBy === SortEpisodesByEnum.byNumber) {
        if (a.episode_id < b.episode_id) return -1;
        return a.episode_id > b.episode_id ? 1 : 0;
      }
      if (a.release_date < b.release_date) return -1;
      return a.release_date > b.release_date ? 1 : 0;
    });
    this.episodes = episodes; // переприсваеваем, т.к. sort мутирует объект
  }
}
