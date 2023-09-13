import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css']
})

export class PasswordresetComponent {

  editresponse:any;
  id:any;
  password:any;
  
resetform = this.builder.group({
    password: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
    confirmpassword: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(8)]))
  });

  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) {  

    }
  
    
  passwordcheck(event:any){
    const resetform = event.target as HTMLInputElement;
    this.password = resetform.value;
    if(this.password && !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.password))){
  
      this.toastr.warning('The password length should be at least 8 characters.should contain at least one upper case letter, lower case letter, number and a special character');
    }
  }

  resetpassword() {
    if (this.resetform.valid && this.resetform.value.password== this.resetform.value.confirmpassword) {
      this.id=sessionStorage.getItem('id');
      this.service.pwdreset(this.id,{password:this.resetform.value.password}).subscribe(item => {
        this.editresponse = item;
        if (this.editresponse ) {
          this.toastr.success('Password reseted');
          this.router.navigate(['home']);
        } 
      });
    } else {
      this.toastr.warning('pssword is different');
    }
  }
    
    
  } 

