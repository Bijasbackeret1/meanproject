import { Component } from '@angular/core';
import { FormBuilder , Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder, private toaster:ToastrService,private http:HttpClient,
  private service:AuthService, private router:Router){
  
  }
  regform=this.builder.group({
    
    firstname:this.builder.control('',Validators.required),
    lastname:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([ Validators.required,Validators.email])),
    phone:this.builder.control('',Validators.required),
  
  })
  
  donereg() {
    if (this.regform.valid) {
      this.service.registeruser(this.regform.value).subscribe(()=> {
      this.toaster.success('waiting for admin aproval' ,'registration success',  {timeOut: 3000});
      this.router.navigate(['login'])
    }); 
    } else {
      this.toaster.warning('Please enter valid data.')
    }
  }

}
