import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
    {{email}}`,
})
export class UserComponent {
  name = 'Aashish Nehete';
  email = 'ashnehete@gmail.com';
}
