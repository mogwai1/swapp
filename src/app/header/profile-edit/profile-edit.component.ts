import { OnInit, OnDestroy, Component, EventEmitter, ElementRef, Input, Output, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';

import { Profile } from '../../shared/models/profile.model';
import { CharactersService } from '../../shared/services/characters.service';
import { EpisodesService } from '../../shared/services/episodes.service';

@Component({
  selector: 'profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileEditComponent {
  @Input() profile: Profile;

  @Output() saveProfile = new EventEmitter<Profile>();

  public profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store, private characterService: CharactersService, private cdr: ChangeDetectorRef) {}

  public ngOnChanges() {
    this.profileForm = this.formBuilder.group({ name: this.profile?.name });
  }
  onLightChoice() {
    this.saveProfile.emit({ name: this.profileForm.value.name, forceSide: 'light' });
    this.resetStep();
  }
  onDarkChoice() {
    this.saveProfile.emit({ name: this.profileForm.value.name, forceSide: 'dark' });
    this.resetStep();
  }

  step = 1; // 1 - ввод имени, 2 - ввод стороны

  resetStep() {
    // сбрасываем шаг, чтобы при повторном открытии опять был ввод имени
    this.step = 1;
  }
}
