import { Component, OnInit } from '@angular/core';
import { IUser } from '../user-interface';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[];

  constructor( private userService: UserService) { }
  //constructor (private http: HttpClient) {}

  ngOnInit() {
    //this.users = this.userService.getUsers();
    this.userService.getUsersViaREST().subscribe(
      data => {
        console.log("ngOnInit");
        this.users = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
 }

  //  ngOnInit(): void {
  //  this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
  //    console.log(data);
  //  });
  //}

}