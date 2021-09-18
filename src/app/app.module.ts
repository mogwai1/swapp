import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule,Store } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { SharedModule } from './shared/shared.module';
import { ProfileState } from './shared/store/profile/profile.state';
import { EpisodesService } from './shared/services/episodes.service';
import { ProfileStateModel } from './shared/store/profile/profile';

const STATES = [ProfileState];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HeaderModule,

    NgxsModule.forRoot(STATES, {
      developmentMode: !environment.production,
      selectorOptions: {
        suppressErrors: true,
        injectContainerState: false
      }
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({ name: 'SWApp', disabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

  }

}
