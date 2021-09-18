import { NgModule } from '@angular/core';
import { NgxsModule, Store } from '@ngxs/store';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EpisodesContainer } from './episodes.container';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { EpisodesState } from './store/episodes/episodes.state';
import { EpisodesService } from '../shared/services/episodes.service';
import { ProfileStateModel } from '../shared/store/profile/profile';

@NgModule({
  imports: [EpisodesRoutingModule, SharedModule, NgxsModule.forFeature([EpisodesState])],
  declarations: [EpisodesContainer, EpisodesListComponent]
})
export class EpisodesModule {}
