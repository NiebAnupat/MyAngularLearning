import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  templateUrl: './sqaure-flex.component.html',
  styleUrls: ['./sqaure-flex.component.css']
})
export class SqaureFlexComponent {
  @Input() divHeight: number = 200;
  @Input() divWidth: number = 200;
}
