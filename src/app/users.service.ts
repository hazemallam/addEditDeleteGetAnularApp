import { Injectable } from '@angular/core';
import {UserModel} from './UserModel';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  APIURL = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getAllUsers(){
   return this.http.get<UserModel[]>(this.APIURL+'users');
  }
  addUser(user){
    return this.http.post(this.APIURL+'users', user).subscribe();
  }
  deleteUserById(id){
    return this.http.delete(this.APIURL+'users/'+id);
  }
  getUserById(id:string){
    return this.http.get<UserModel>(this.APIURL+'users/'+id);
  }
  updateUserById(id:string, user: any){
    return this.http.patch(this.APIURL+'users/'+id, user);
  }
}
