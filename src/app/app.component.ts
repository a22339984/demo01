import { Component } from '@angular/core';
// import { Account } from './model/account.model.ts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo01';
  url = 'www.google.com';
  isShow = 'true';

  weeks: string[] = ["星期一","星期二","星期三"];
  users =[
    {name:'Lux',age:18},
    {name:'tina',age:60},
  ]

    now = new Date();

  //acc Accort(){

  //};

  sayHi(word: string = 'ohho'){
    alert(word);
  }



}
