import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";

@Component({
  selector: 'app-angform',
  templateUrl: './angform.component.html',
  styleUrls: ['./angform.component.css']
})
export class AngformComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }

  onSubmit(form:NgForm){
    console.log(form);
  }

}
