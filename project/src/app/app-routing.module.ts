import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { adminAuthGuard } from './guard/admin.guard';

const routes: Routes = [
  //{path:'',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:UserlistComponent},
  {path:'login',component:LoginComponent},
  {path:'passwordreset',component:PasswordresetComponent },
  {path:'home',component:HomeComponent},
  {path:'userlist',component:UserlistComponent , canActivate:[adminAuthGuard]},
  {path:'edit',component:EditComponent , canActivate:[adminAuthGuard]},
  //{path:'passwordreset',component:PasswordresetComponent , canActivate:[adminAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
