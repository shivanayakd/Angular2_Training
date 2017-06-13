import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  myForm = new FormGroup({
    email : new FormControl('test email',[Validators.required,Validators.minLength(5),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ),
    pass : new FormControl()
  })

onSubmit(){
  console.log(this.myForm);
}

  constructor() { }

  ngOnInit() {
  }

}
