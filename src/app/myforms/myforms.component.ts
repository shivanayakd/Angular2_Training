import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css'],
})
export class MyformsComponent implements OnInit {


constructor(private _router: Router) { }
  validusr = {
    email : 'abc@gmail.com',
    pass : '123'
  }
  // email = "abc@gmai.com";
  onsubmit(value : any){
   //console.log(value); 
        //  console.log('Form Input'+ value.email + '---' + value.pwd);
      // console.log('Valid Input'+ this.validusr.email + '---' + this.validusr.pass);
    if(value.email == this.validusr.email && value.pwd == this.validusr.pass) {

      console.log("Valid user");
      this._router.navigate(['photos']);
    }
    else {
      console.log("Invalid User");
    }
  }
  

  ngOnInit() {
  }

}
