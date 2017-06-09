import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraydata',
  templateUrl: './arraydata.component.html',
  styleUrls: ['./arraydata.component.css']
})

export class ArraydataComponent implements OnInit {

  myData = [
    {id : 32, name: 'exitto', email: 'exitto@gmail.com'},
    {id : 23, name: 'Rajesh23', email: 'Rajesh23@gmail.com'},
    {id : 2, name: 'robertt', email: 'robertt@gmail.com'},
    {id : 52, name: 'jim mecarger', email: 'mecarger@gmail.com'},
    {id : 72, name: 'bob tim', email: 'tim@gmail.com'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
