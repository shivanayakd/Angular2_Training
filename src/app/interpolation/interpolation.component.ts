import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  myData = "I will be interpolated in the template";
  myImg = "https://www.harman.com/sites/default/files/Deconstructed_FMA_Small_0.jpg";

  constructor() { }

  ngOnInit() {
  }

}
