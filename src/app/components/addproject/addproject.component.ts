import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  //@Input() name;

  constructor() { }

  ngOnInit() {
  }

  onSubmitProjectForm(){
    console.log("Project Form submitted");
  }

}
