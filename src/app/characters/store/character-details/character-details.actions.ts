export class LoadCharacterDetails {
  static readonly type = '[CharacterDetails] Load Character Details';
  constructor(public readonly id: string) {}
}
