import { CanActivateFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = () => {
  if( sessionStorage.getItem('role')=='admin'){
    return true;
  }else{
    return false;
  }
};
