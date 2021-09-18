import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CharactersComponent } from './characters.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CharactersComponent
      }
    ])
  ]
})
export class CharactersRoutingModule {}
