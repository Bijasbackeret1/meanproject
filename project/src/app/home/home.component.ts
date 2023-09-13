import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id:any;
  user:any;
  fname:any;
  lname:any;
  email:any;
  phone:any;

  constructor(private service:AuthService,private router:Router,private toastr: ToastrService) {
    this.id=sessionStorage.getItem('id'); 
    this.service.getuser(this.id).subscribe(result=>{
      this.user=result;
      console.log(result);
      this.fname=this.user.data.user[0].firstname;
      this.lname=this.user.data.user[0].lastname;
      this.email=this.user.data.user[0].email;
      this.phone=this.user.data.user[0].phone;
    
      // this.toastr.success(this.fname);
      // this.toastr.success(this.lname);
      // this.toastr.success(this.email);
      // this.toastr.success(this.phone);
      
    });        
  }

}




