import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private endpointUrl : String = "http://localhost:8989/projectmanagement/";

  constructor(private http:HttpClient) { }

  getUsers(): Observable <any>{
    return this.http.get(this.endpointUrl + '/viewUser').pipe(map(res => res));
  }

  addUser(user): Observable <any>{
    return this.http.post(this.endpointUrl + '/addUser', user).pipe(map(res => res));

  }

  editUser(user): Observable <any>{
    return this.http.put(this.endpointUrl + '/editUser', user).pipe(map(res => res));

  }

  deleteUser(userId){
    return this.http.delete(this.endpointUrl + '/deleteUser/' + userId).pipe(map(res => res));
  }
}
