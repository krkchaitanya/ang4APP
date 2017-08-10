import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import  { User} from "../user";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
newUser=new User();
@Output() createNewUserEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  create(){
    this.createNewUserEvent.emit(this.newUser);
    console.log(this.newUser);
    this.newUser=new User();
  }



}
