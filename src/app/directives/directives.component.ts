import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
    swit: string;
  bol2  = true;
    _range = 20;
  cls1 = 'test';

  da = new Date('1990,02,02');
  modeltest = "I will be shown in text";

  val = 550;

  bol = true;

  takeInp(eve) {
    console.log(eve.target.value);
    this.modeltest = eve.target.value;
  }

  multicl = {
     'test' : !this.bol2 ,
     'test2' : false
  };

  stylete = {
    'color' : this.bol2 ? 'red' : 'green',
    'font-size' : false ? '3em' : '1em'
  };

  changeSwit(txt) {
    console.log(txt);
    this.swit = txt;
  }




  clsarr = ['test','raw'];
  constructor() { }

  ngOnInit() {
  }


}
