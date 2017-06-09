import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  _parenttodo : any;

  defaulttodo = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    ' Odio, numquam. Ullam qui saepe sapiente porro, ipsa suscipit dolor aliquid debitis',
    ' asperiores, delectus labore, facere tenetur temporibus fugit. Rerum, sed assumenda.'
  ];

  addme( val ) {
    this.defaulttodo.push(val);
  }
  deleteMe(va ) {
    this.defaulttodo.splice(this.defaulttodo.indexOf(va),1);
  }

fromchild ( eve ) {
  // if(this.defaulttodo.indexOf(this._parenttodo) > 0){
  //   this.defaulttodo.splice(this.defaulttodo.indexOf(this._parenttodo),1,eve);
  // }

  if(this.defaulttodo.indexOf(this._parenttodo) != -1){
    this.defaulttodo.splice(this.defaulttodo.indexOf(this._parenttodo),1,eve);
  }
    else {
    this.defaulttodo.push(eve);
  }
  console.log('updated value----------'+eve);
  
}

  updateMe ( va ) {
    console.log( 'yet to update------------'+va);
    this._parenttodo = va;
  }
  constructor() { }

  ngOnInit() {
  }

}
