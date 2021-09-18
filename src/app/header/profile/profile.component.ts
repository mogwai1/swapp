import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  @Input() profile: any;

  @Output() editProfile = new EventEmitter<void>();

  public onEditProfile() {
    this.editProfile.emit();
  }
}
