import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CharacterDetails } from '../models/character-details.model';
import { Character } from '../models/character.model';
import { arrayShuffle } from '../utils/array-utils';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<Character[]> {
    return this.http.get<{ results: Character[] }>('https://swapi.dev/api/people/?format=json').pipe(map(x => arrayShuffle(x.results)));
  }

  public getCharacterDetails(id: string): Observable<CharacterDetails> {
    return this.http.get<CharacterDetails>(id); // id == url
  }
}
