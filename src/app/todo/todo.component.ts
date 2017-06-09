import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  inputs: ['childtodo'],
  outputs: ['updatedtodo']
})
export class TodoComponent implements OnInit {

showform = false;
valuetype : boolean;

showme() {
  this.showform = true;
  this.valuetype = true;
}
childtodo : any;
updatedtodo = new EventEmitter();
// @Output() newvalue = new EventEmitter();

_updatedvalue : any;

sendUpdate() {
  
  // this.showform = false;
  this._updatedvalue = this.childtodo;

  // if(this.valuetype){
      this.updatedtodo.emit(this._updatedvalue);
  // }
  
  // else {
    // this.newvalue.emit(this._updatedvalue);
  // }
  
}
  constructor() { }

  ngOnInit() {
  }

}
