import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'my-ng-app';
  // msg = 'Hello World Angular';
  // price: number = 0;

  // myappMaxLabel: String = 'มากที่สุด';

  // min: number = 0;
  // max: number = 0;

  sqaureWidth: number = 200;
  sqaureHeight: number = 200;

  // Method
  // myFunc = () => {
  //   console.log('Hello From My Function');
  // };

  // calPrice = (inputPrice: String) => {
  //   this.price = (Number(inputPrice) * 3) / 4;
  // };

  // testClick = () => {
  //   console.log('Test Click');
  // };

  // testNumberChange = (newValue: Number) => {
  //   console.log('New Value : ', newValue);
  // };

    // doAppMinChange = (newValue: number) => {
  //   console.log('App Min Change : ', newValue);
  //   this.min = newValue;
  // };
  // doAppMaxChange = (newValue: number) => {
  //   console.log('App Max Change : ', newValue);
  //   this.max = newValue;
  // };

  increaseWidth = () => {
    this.sqaureWidth += 10;
  }

  decreaseWidth = () => {
    this.sqaureWidth -= 10;
  }

  increaseHeight = () => {
    this.sqaureHeight += 10;
  }

  decreaseHeight = () => {
    this.sqaureHeight -= 10;
  }
}
