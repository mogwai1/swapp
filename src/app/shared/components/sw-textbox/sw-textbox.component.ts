import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-textbox',
  templateUrl: './sw-textbox.component.html',
  styleUrls: ['./sw-textbox.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SwTextBoxComponent), multi: true }]
})
export class SwTextBoxComponent implements OnChanges, ControlValueAccessor {
  @Input() value: string;
  @Input() placeholder = '';
  @Input() title = '';
  @Input() required = false;
  @Input() autocomplete = 'off';

  @Output() readonly valueChange = new EventEmitter<string>();
  @Output() readonly textboxBlur = new EventEmitter();
  @Output() readonly textboxFocus = new EventEmitter();

  private propagateChange: (_: any) => void;
  private propagateTouch: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.value = `${this.value ?? ''}`;
    }
  }

  public registerOnChange(fn: (_: any) => void) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.propagateTouch = fn;
  }

  public writeValue(value: string) {
    this.value = `${value ?? ''}`;
    this.changeDetectorRef.markForCheck();
  }

  onValueChange(model: string) {
    if (this.propagateChange) {
      this.propagateChange(model);
    }
    this.valueChange.emit(model);
  }

  onBlur() {
    if (this.propagateTouch) {
      this.propagateTouch();
    }
    this.textboxBlur.emit();
  }

  public onFocus() {
    this.textboxFocus.emit();
  }
}
