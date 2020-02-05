import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss'],
  providers: [BmiService]
})
export class Lesson1Component implements OnInit {
  money: number = 1;
  @Output() mChange: EventEmitter<number> = new EventEmitter<number>();
  constructor(
    public bmiServeice: BmiService
  ) { }

  ngOnInit() {
  }

  moneyChange(money: number) {
    this.mChange.emit(money);
  }

  callService() {
    this.bmiServeice.sayHello();
  }
}
