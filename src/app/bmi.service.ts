import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  name = 'Tina';
  constructor() { }

  sayHello() {
    alert(this.name);
  }
}
