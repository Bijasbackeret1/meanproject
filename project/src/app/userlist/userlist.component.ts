import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';





@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {


  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'phone', 'role','status','approval','edit','delete'];
  userdata :any ;
  responsedata:any;
  selected :string;
  keywordFilter: string = '';
  selectedStatus: string = '';
  
  
  
  

  constructor(private service:AuthService,private router: Router,private toastr: ToastrService){
    this.selected = 'firstname';
    this.selected = 'role';
    this.service.getuserlist().subscribe(response => {
      this.responsedata=response;
      this.userdata =this.responsedata.data.user
      
      
    
    }); 
    
  }


  @ViewChild(MatSort) sort !: MatSort;



  approveuser(id:any) {
    this.service.approveuser(id).subscribe(() => {
      this.toastr.success('approval success');
        this.service.getuserlist().subscribe(response => {
          this.userdata=response;
          this.loadusers();
          
          
        });
    });
  }

  
  
  
  

  

  // approveuser(id:any) {
  //   this.service.approveuser(id).subscribe(() => {
  //       this.toastr.success(' approved');
  //       this.service.getusers().subscribe(response => {
  //         this.userdata=response;
        
  //       });
  //   });
  // }
  
  loadusers() {
    this.service.getuserlist().subscribe(Response => {
      this.responsedata=Response;
      this.userdata =this.responsedata.data.user
      this.userdata = new MatTableDataSource(this.userdata)
      this.userdata.sort=this.sort;
      
      
    
    });  
  }

  delete(id:any) {
      console.log(id);
      this.service.deleteid(id).subscribe(() => {
          this.toastr.success('user removed successfully')
          this.service.getuserlist().subscribe(response => {
            this.userdata=response;
            this.loadusers();
            
          });
        });
      } 
  
  edituser() {
    this.router.navigate(['/edit']);
  }
  

  

  
}
