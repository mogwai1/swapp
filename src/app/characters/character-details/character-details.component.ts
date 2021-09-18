import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';

import { CharacterDetails } from '../../shared/models/character-details.model';

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailsComponent {
  @Input() character: CharacterDetails;
  @Input() loading: boolean;

  ngOnInit() {}

  ngOnDestroy() {}

  constructor(private store: Store) {}
}
