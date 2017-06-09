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
showme() {
  this.showform = true;
}

childtodo : any;
updatedtodo = new EventEmitter<any>();

sendUpdate() {
      this.updatedtodo.emit(this.childtodo);
      this.showform = false;
      this.childtodo = '';
}

  constructor() { }

  ngOnInit() {
  }

}
