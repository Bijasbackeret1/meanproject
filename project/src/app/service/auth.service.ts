
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  registeruser(inputdata:any){
    return this.http.post('http://localhost:5000/user',inputdata);
  } 
  login(inputdata:any){
    return this.http.post('http://localhost:5000/login',inputdata);
  } 
  getuserlist(){
    return this.http.get('http://localhost:5000/userlist');
  }
// userlist(){
//   return this.http.get('http://localhost:5000/userlist');
// }
approveuser(id:any){
  return this.http.patch(`http://localhost:5000/userapproval/${id}`,{});
}
deleteid(id:any){
  return this.http.delete(`http://localhost:5000/userdelete/${id}`);
}
getuser(id:any){
  return this.http.get(`http://localhost:5000/getuser/${id}`);
}
pwdreset(id:any,inputdata:any){
  return this.http.patch(`http://localhost:5000/pwdreset/${id}`,inputdata);
}
// login(inputdata){
//   return this.http.post('http://localhost:5000/login',inputdata);
// }
// edituser(id:any,inputdata:any){
//   return this.http.patch(`http://localhost:5000/newdat/${id}`,inputdata);
// }
edituser(id:any,inputdata:any){
  return this.http.patch(`http://localhost:5000/newdata/${id}`,inputdata);
}


}