import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
    swit: string;
  bol2  = true;
  cls1 = 'test';

  modeltest = "I will be shown in text";

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
