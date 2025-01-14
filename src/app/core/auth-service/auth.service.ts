import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public isLoggedIn():boolean{
    const localStorage = this.document.defaultView?.localStorage;
    if(localStorage && localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
