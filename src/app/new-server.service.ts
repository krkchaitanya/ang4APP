import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()

export class NewServerService {

  constructor(private http:Http,private response:Response) { }

var addServers=function(servers){
  return http.post("https://fourang-1d0e1.firebaseio.com/servers.json");
}

}
