import { Component, OnInit } from '@angular/core';
import { MyphotoService } from '../myphoto.service';

@Component({
  selector: 'app-myphotos',
  templateUrl: './myphotos.component.html',
  styleUrls: ['./myphotos.component.css']
})
export class MyphotosComponent implements OnInit {

  _errMsg:string;
  _myphotos:any;

  constructor(private _myph : MyphotoService) { }

  ngOnInit() {
    this._myph.getData().subscribe( val => this._myphotos = val,
                                    err => this._errMsg = err);
  }

}
