import { UserserviceService } from './../../services/userservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users:any[];

  user = {
    firstName:'',
    lastName:'',
    employeeId:''
  }

  isEdit: boolean = false;
  order: boolean = false;

  constructor(public userService: UserserviceService) { 
      this.userService.getUsers().subscribe(users => {
      this.users = users;
  })   
  }

  ngOnInit() {
  }

  onSubmit(isEdit){
    if (isEdit){
      this.userService.editUser(this.user).subscribe(user => {
        this.users.unshift(this.user);
        this.isEdit = false;
    });
    }else{
      console.log(this.user);
      this.userService.addUser(this.user).subscribe(user => {
        this.users.unshift(user);
        
      });
    }
    
  }

  onEditClick(user){
    this.isEdit = true;
    this.user = user;
  }

  onDeleteClick(userId){
    this.userService.deleteUser(userId).subscribe(user=>{
      for (let i=0;i < this.users.length; i++){
        if (this.users[i].userId == userId){
          this.users.splice(i, 1);
        }
      }
    });
  }

  onResetClick(){
    this.isEdit = false;
  }


  sortByFName(){
    this.order = !this.order;
    this.users.sort((n1, n2)=>{
      return (this.order)? n1.firstName.localeCompare(n2.firstName):n2.firstName.localeCompare(n1.firstName); 
    });
  }

  sortByLName(){
    this.order = !this.order;
    this.users.sort((n1, n2)=>{
      return (this.order)? n1.lastName.localeCompare(n2.lastName):n2.lastName.localeCompare(n1.lastName); 
    });
  }

  sortByEmpId(){
    this.order = !this.order;
    if(this.order){
      this.users.sort((a,b) => {
        return a.employeeId-b.employeeId;
      });
    }else{
      this.users.sort((a,b) => {
        return b.employeeId-a.employeeId;
      });
    }
  }

}
