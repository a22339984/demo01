import { Component, OnInit } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss']
})
export class Lesson2Component implements OnInit {
  isShow = 'true';
  number = 0;
  constructor(
    public bmiServeice: BmiService
  ) { }

  ngOnInit() {
  }
  callService() {
    this.bmiServeice.sayHello();
  }
}
