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
    dateFlag:false,
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

  isEdit: boolean = false;
  order: boolean = false;

  

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
      console.log(this.project);


      this.projectService.addProject(this.project).subscribe(user => {
        this.projects.unshift(user);
    });

    }
    this.isSearch = false;
  }

  onChangeStatus(dateFlag:any){
    console.log("Set date--> "  + dateFlag);
    this.project.dateFlag = dateFlag;


  }

  onSearchClick(){
    console.log("Search button clicked..");
    this.isSearch = true;
  }

  onResetClick(){
    this.priority = 0;
    this.isEdit = false;
  }


  /*onSubmit(isEdit){
    if (isEdit){
      this.projectService.editUser(this.user).subscribe(user => {
        this.users.unshift(this.user);
        this.isEdit = false;
    });
    }else{
      console.log(this.user);
      this.projectService.addUser(this.user).subscribe(user => {
        this.projects.unshift(user);
        
      });
    }
    
  }
*/
  onEditClick(project){
    this.isEdit = true;
    this.project = project;
  }

  /*

  onDeleteClick(userId){
    this.projectService.deleteUser(userId).subscribe(user=>{
      for (let i=0;i < this.projects.length; i++){
        if (this.projects[i].userId == userId){
          this.projects.splice(i, 1);
        }
      }
    });
  }
*/

  sortByFName(){
    this.order = !this.order;
    this.projects.sort((n1, n2)=>{
      return (this.order)? n1.firstName.localeCompare(n2.firstName):n2.firstName.localeCompare(n1.firstName); 
    });
  }

  sortByLName(){
    this.order = !this.order;
    this.projects.sort((n1, n2)=>{
      return (this.order)? n1.lastName.localeCompare(n2.lastName):n2.lastName.localeCompare(n1.lastName); 
    });
  }

  sortByEmpId(){
    this.order = !this.order;
    if(this.order){
      this.projects.sort((a,b) => {
        return a.employeeId-b.employeeId;
      });
    }else{
      this.projects.sort((a,b) => {
        return b.employeeId-a.employeeId;
      });
    }
  }

}
