import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
newName:string;
newLocation:string;

@Output() newHuman=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

addNewPerson(){
this.newHuman.emit({
  name:this.newName,
  location:this.newLocation
})
};

 

}
