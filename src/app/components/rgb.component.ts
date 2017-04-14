import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rgb',
  templateUrl: 'rgb.component.html'
})
export class RgbComponent {
  r: number;
  g: number;
  b: number;

  constructor() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }

  keyupColor() {
    this.correctValues();
    let colorBlock = document.getElementById('color-block');
    colorBlock.style.backgroundColor = this.getRgbString();
  }

  changeColor() {
    if (this.r === null) {
      this.r = 0;
    }
    if (this.g === null) {
      this.g = 0;
    }
    if (this.b === null) {
      this.b = 0;
    }
  }

  private getRgbString(): string {
    return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
  }

  private correctValues(): void {
    if (this.r > 255) {
      this.r = 255;
    } else if (this.r < 0) {
      this.r = 0;
    }

    if (this.g > 255) {
      this.g = 255;
    } else if (this.g < 0) {
      this.g = 0;
    }

    if (this.b > 255) {
      this.b = 255;
    } else if (this.b < 0) {
      this.b = 0;
    }
  }
}
