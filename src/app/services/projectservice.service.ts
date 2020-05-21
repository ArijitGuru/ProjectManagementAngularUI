import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {


  private endpointUrl : String = "http://localhost:8989/projectmanagement/";

  constructor(private http:HttpClient) { }

  getProjects(): Observable <any>{
    return this.http.get(this.endpointUrl + '/viewProject').pipe(map(res => res));
  }

  addProject(project): Observable <any>{
    return this.http.post(this.endpointUrl + '/addProject', project).pipe(map(res => res));

  }

  editProject(project): Observable <any>{
    return this.http.put(this.endpointUrl + '/editProject', project).pipe(map(res => res));

  }

  deleteProject(projectId){
    return this.http.delete(this.endpointUrl + '/deleteProject/' + projectId).pipe(map(res => res));
  }
}
