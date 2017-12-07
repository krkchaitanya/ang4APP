import { Component, Input} from "@angular/core";
import { COMPONENT_VARIABLE } from "@angular/platform-browser/src/dom/dom_renderer";

@Component({
    selector:"app-server",
    templateUrl:"./server.component.html"
})

export class ServerComponent{
dualway="something";
dualbool=false;
@Input() element:{name:string,id:number,location:string};

    constructor(){}

    serverBtn(){
        this.dualbool=true;
        console.log("server btn clickd");
    }


}