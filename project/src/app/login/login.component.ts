import { Component } from '@angular/core';
import { FormBuilder , Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private builder:FormBuilder, private toaster:ToastrService,
    private service:AuthService, private router:Router){

    }
    logres:any;
  loginform=this.builder.group({
    email:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  })



  proceedlogin() {
    if (this.loginform.valid) {
      this.service.login(this.loginform.value).subscribe(res => {
        this.logres = res;
        if (this.logres) {
          if (this.logres.data.user.status == 'active') {
            sessionStorage.setItem('id', this.logres.data.user._id);
            sessionStorage.setItem('role', this.logres.data.user.role);
  
            if (this.logres.data.user.role == "admin") {
              this.router.navigate(['userlist']);
            } else if (this.logres.data.user.password === this.logres.data.user.firstname + "#2021") {
              this.router.navigate(['passwordreset']);
            } else {
              this.router.navigate(['login']);
              this.toaster.error('check detailes you are entered');
            }
          } else {
            this.toaster.error('inactive');
          }
        } else {
          this.toaster.error('Invalid credentials');
        }
      });
    } else {
      this.toaster.warning('Please enter valid data.');
    }
  }
  
}



