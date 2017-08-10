import { Component, OnInit } from '@angular/core';
import { User } from "./user";
import { UserService} from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:User[]=[
//   new User(1,"first","last","somemail@gmail.com"),
// new User(2,"first","last","somemail@gmail.com"),
// new User(3,"first","last","somemail@gmail.com")
];
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.getUsers();
  }

create(user:User){
  this._userService.create(user)
  .then(status=>this.getUsers()).catch(function(err){
    console.log(err);
  })

}

destroy(user:User){
  const i=this.users.indexOf(user);
  this.users.splice(i,1);
}
update(users:any){
  console.log(users);
  const i=this.users.indexOf(users.original);
  this.users[i]=users.edited;
}

getUsers(){
  this._userService.getUsers().then(users=>this.users=users).catch(function(err){
    console.log(err);
  });
}



}
