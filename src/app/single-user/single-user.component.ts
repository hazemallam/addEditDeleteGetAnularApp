import { Component, OnInit } from '@angular/core';
import {UserModel} from './../UserModel';
import {UsersService} from './../users.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: UserModel;
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  getUser(){
    const id = this.route.snapshot.params.id;
    this.usersService.getUserById(id).subscribe(data=> this.user = data)

  }

  ngOnInit() {
    this.getUser()
  }

}
