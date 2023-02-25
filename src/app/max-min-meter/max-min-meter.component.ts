import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.css']
})
export class MaxMinMeterComponent {
  @Input() minLabel: String = 'Min';
  @Input() maxLabel: String = 'Max';

  @Output() minChange = new EventEmitter<number>();
  @Output() maxChange = new EventEmitter<number>();

  doMinChange = (newValue: number) => { this.minChange.emit(newValue); }
  doMaxChange = (newValue: number) => { this.maxChange.emit(newValue); }

}
