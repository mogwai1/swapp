import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Profile } from '../shared/models/profile.model';
import { SaveProfile } from '../shared/store/profile/profile.actions';
import { ProfileState } from '../shared/store/profile/profile.state';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Select(ProfileState.getProfile) profile$: Observable<Profile>;

  constructor(private store: Store) {}

  public onEditProfile() {
    const dialog = document.getElementById('edit-dialog') as any;
    dialog.showModal();
  }

  onSaveProfile(profile: Profile) {
    const dialog = document.getElementById('edit-dialog') as any;
    dialog.close();

    this.store.dispatch(new SaveProfile(profile));
  }
}
