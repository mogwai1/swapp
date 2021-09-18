import { CharacterDetails } from '../../../shared/models/character-details.model';

export interface CharacterDetailsStateModel {
  character: CharacterDetails;
  loading: boolean;
}
