import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '../shared/shared.module';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterDetailsState } from './store/character-details/character-details.state';
import { CharactersState } from './store/characters/characters.state';

@NgModule({
  imports: [CharactersRoutingModule, SharedModule, NgxsModule.forFeature([CharactersState, CharacterDetailsState])],
  declarations: [CharactersComponent, CharactersListComponent, CharacterDetailsComponent]
})
export class CharactersModule {}
