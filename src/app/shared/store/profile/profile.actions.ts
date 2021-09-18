import { Profile } from '../../models/profile.model';

export class LoadProfile {
  static readonly type = '[Shared/Profile] Load Profile';
}

export class SaveProfile {
  static readonly type = '[Shared/Profile] Save Profile';
  constructor(public readonly profile: Profile) {}
}
