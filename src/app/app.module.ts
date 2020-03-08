
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import {FormsModule} from '@angular/forms';


//Component Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { AddprojectComponent } from './components/addproject/addproject.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ViewtaskComponent } from './components/viewtask/viewtask.component';

//Search module
//install using npm
//$ npm i ng2-search-filter --save
//and import searchpipeline in app.module.ts, then use in html
import { Ng2SearchPipeModule } from 'ng2-search-filter';


//Service Imports
import { UserserviceService } from './services/userservice.service';

const appRoutes: Routes = [
  {path:'addproject', component:AddprojectComponent},
  {path:'addtask', component:AddtaskComponent},
  {path:'adduser', component:AdduserComponent},
  {path:'viewtask', component:ViewtaskComponent}
]




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddtaskComponent,
    AddprojectComponent,
    AdduserComponent,
    ViewtaskComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
