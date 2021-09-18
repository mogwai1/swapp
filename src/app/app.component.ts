import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { EpisodesService } from './shared/services/episodes.service';
import { ProfileStateModel } from './shared/store/profile/profile';

import { LoadProfile } from './shared/store/profile/profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(new LoadProfile());
  }
}
