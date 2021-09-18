import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EpisodesContainer } from './episodes.container';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EpisodesContainer
      }
    ])
  ]
})
export class EpisodesRoutingModule {}
