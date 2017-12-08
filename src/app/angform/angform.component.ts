import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import {ViewChild} from "@angular/core";

@Component({
  selector: 'app-angform',
  templateUrl: './angform.component.html',
  styleUrls: ['./angform.component.css']
})
export class AngformComponent implements OnInit {

@ViewChild('f') signupForm:NgForm;

  defaultValue="teacher";
  genders=['male','female'];
  constructor() { }

user={
  username:'',
  email:'',
  secret:'',
  answere:'',
  gender:''
}

  ngOnInit() { 
  }

// onsubmit(form:NgForm){
//  console.log(form);
// }

  onSubmit(){
    console.log(this.signupForm);
    this.user.username=this.signupForm.value.userData.username;
    // this.signupForm.reset();
  }

}
