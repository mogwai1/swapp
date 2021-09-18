import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Episode } from '../models/episode.model';
import { arrayShuffle } from '../utils/array-utils';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  constructor(private http: HttpClient) {}

  public getEpisodes(): Observable<Episode[]> {
    return this.http.get<{ results: Episode[] }>('https://swapi.dev/api/films/?format=json').pipe(map(x => arrayShuffle(x.results)));
  }
}
