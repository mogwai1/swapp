import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-select',
  templateUrl: './sw-select.component.html',
  styleUrls: ['./sw-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SwSelectComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwSelectComponent implements ControlValueAccessor {
  @Input() items: string[];
  @Input() value: string;

  @Output() readonly valueChange = new EventEmitter<any | any[]>();

  private propagateChange: (_) => void;
  private propagateTouch: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public onValueChange(event: any) {
    if (this.propagateChange) {
      this.propagateChange(event.target.value);
    }
    this.valueChange.emit(event.target.value);
  }

  public writeValue(value: string) {
    this.value = value;
    this.changeDetectorRef.detectChanges();
  }

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn) {
    this.propagateTouch = fn;
  }
}
