import { Component } from '@angular/core';
import {NewServerService} from "new-server.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  btnprop=false;
  newServerData="No server created";
  twoway="dualway";

  servers=[
    {
      name:"mikel",
      id:getId(),
      location:"AustinTx"
    },
    {
      name:"johnson",
      id:getId(),
      location:"houstonTx"
    }
  ];

  persons=[
    {
      name:"johnsena",
      id:getId(),
      location:"AustinTx"
    },
    {
      name:"mitchelmartin",
      id:getId(),
      location:"houstonTx"
    }
  ];
  

onAddPerson(person){
this.persons.push({
  name:person.name,
  id:getId(),
  location:person.location
})
}

  constructor(){
    setTimeout(()=>{
      console.log("hello from set timeout");
      return this.btnprop=true;
    },2000);
  }

  onCreateServer(){
    this.newServerData="server created";
    console.log("btn clicked on app component");
    };

let getId=function(){
  return Math.floor(Math.random()*100); 
};
}

