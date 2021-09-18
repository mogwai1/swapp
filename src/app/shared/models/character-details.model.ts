import { Character } from './character.model';

export interface CharacterDetails extends Character {
  height: number;
  mass: number;
}
