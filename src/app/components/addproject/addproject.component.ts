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

  project = {
    projectName:'',
    setDateFlag:'',
    startDate:'',
    endDate:'',
    projectPriority:'',
    managerEmployeeId:'',
    managerFirstName:'',
    managerLastName:''
  }

  private isSearch: boolean = false;
  constructor() { 
    this.priority = 0;
  }

  ngOnInit() {

  }

  onSubmitProjectForm(){
    if (this.isSearch){
      console.log("Do nothing, search is clicked");
    }else {
      console.log("Project form submitted");
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
