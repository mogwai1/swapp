import { Character } from '../../../shared/models/character.model';

export class LoadCharacters {
  static readonly type = '[Characters] Load Characters';
}

export class SelectCharacter {
  static readonly type = '[Characters] Select Character';
  constructor(public readonly character: Character) {}
}

export class SetFilter {
  static readonly type = '[Characters] Set Filter';
  constructor(public readonly filter: string) {}
}
