
import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  userdata:any;
  userid:any;
  editdata:any;
  id:any;
  newdata:any;
  user:any;
  



  registerform = this.builder.group({
    firstname: this.builder.control(''),
    lastname: this.builder.control(''),
    email: this.builder.control('', Validators.compose([Validators.email])),
    phone: this.builder.control('', Validators.compose([Validators.minLength(10)])),
  });

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService,private http:HttpClient,private route:ActivatedRoute) {   
  

  this.id=sessionStorage.getItem('id'); 
  this.service.getuser(this.id).subscribe(result=>{
    this.user=result;
    console.log(result);

  });
}
  
  edituser() {
    if (this.registerform.valid) {
      this.newdata=this.registerform.value;
      this.service.edituser(this.userid,this.newdata).subscribe(() => {
        this.toastr.success('user detailes changed');
        this.router.navigate(['userlist']);
      });
    } else {
      this.toastr.warning('session failed')
    }
  }
}





