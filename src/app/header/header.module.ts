import { NgModule } from '@angular/core';
import { Store } from '@ngxs/store';

import { SharedModule } from '../shared/shared.module';
import { ProfileStateModel } from '../shared/store/profile/profile';
import { HeaderComponent } from './header.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { EpisodesService } from '../shared/services/episodes.service';

@NgModule({
  imports: [SharedModule],
  declarations: [HeaderComponent, ProfileComponent, ProfileEditComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
