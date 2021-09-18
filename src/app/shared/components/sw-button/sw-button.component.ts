import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'sw-button',
  templateUrl: './sw-button.component.html',
  styleUrls: ['./sw-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwButtonComponent {
  @Input() disabled = false;
  @Input() color: 'common' | 'primary' = 'common';

  @HostBinding('style.width') @Input() width: string | undefined;
  @HostBinding('style.height') @Input() height: string | undefined;

  @Output() readonly btnClick = new EventEmitter();

  public onClick() {
    this.btnClick.emit();
  }
}
