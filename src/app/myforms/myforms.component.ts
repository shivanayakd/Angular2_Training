import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css'],
})
export class MyformsComponent implements OnInit {

  validusr = {
    email : 'abc@gmail.com',
    pass : '123'
  }
  // email = "abc@gmai.com";
  onsubmit(value : any){
   console.log(value); 
    if(value.email == this.validusr.email && value.pwd == this.validusr.pass) {
      console.log("Valid user");
    }
    else {
      console.log("Invalid User");
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
