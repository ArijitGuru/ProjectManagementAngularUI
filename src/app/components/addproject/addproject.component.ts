import { ProjectserviceService } from './../../services/projectservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { ConstantPool } from '@angular/compiler';


@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  //@Input() name;

  private priority : number = 0; 
  projects:any[];
  project = {
    projectName:'',
    setDateFlag:'',
    startDate:'',
    endDate:'',
    projectPriority:'',
    managerEmployeeId:'',
    managerFirstName:'',
    managerLastName:'',
    taskCount:'',
    status:''
  }

  private isSearch: boolean = false;

  constructor(public projectService: ProjectserviceService) { 
    this.priority = 0;
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      console.log(projects);
    })
    
  }

  ngOnInit() {
    
  }

  onSubmitProjectForm(){
    if (this.isSearch){
      console.log("Do nothing, search is clicked");
    }else {
      console.log("Project form submitted");
      console.log (this.project.projectName);
    }
    this.isSearch = false;
  }

  onSearchClick(){
    console.log("Search button clicked..");
    this.isSearch = true;
  }

  onResetClick(){
    this.priority = 0;
  }

}
