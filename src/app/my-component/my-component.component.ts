import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent {
  value: number = 0;
  @Input() step: number = 1;
  @Input() minRange: number = 0;
  @Input() maxRange: number = 100;
  @Output() numberChange = new EventEmitter<number>();

  // Method
  decrease = () => {
    if (this.value > this.minRange) {
      this.value -= this.step;
      this.numberChange.emit(this.value);
    }
  };

  increase = () => {
    if (this.value < this.maxRange) {
      this.value += this.step;
      this.numberChange.emit(this.value);
    }
  };
}
