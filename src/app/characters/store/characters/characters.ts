import { Character } from '../../../shared/models/character.model';

export interface CharactersStateModel {
  characters: Character[];
  loading: boolean;
  selectedCharacter: Character;
  filter: string;
}
