import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';
import { ProfileStateModel } from './profile';
import { LoadProfile, SaveProfile } from './profile.actions';

@State<ProfileStateModel>({
  name: 'ProfileState',
  defaults: {
    profile: null
  }
})
@Injectable()
export class ProfileState {
  constructor(private profileService: ProfileService) {}

  @Selector()
  static getProfile({ profile }: ProfileStateModel): Profile {
    return profile
  }

  @Action(LoadProfile)
  loadProfile(ctx: StateContext<ProfileStateModel>) {
    return this.profileService.getProfile().pipe(tap(profile => ctx.patchState({ profile })));
  }

  @Action(SaveProfile)
  saveProfile(ctx: StateContext<ProfileStateModel>, { profile }: SaveProfile) {
    return this.profileService.saveProfile(profile).pipe(tap(resp => ctx.patchState({ profile: resp })));
  }
}
