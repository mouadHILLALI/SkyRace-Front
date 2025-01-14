import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone:false
})
export class LoginComponent implements OnInit {
    loginForm !: FormGroup;

  constructor(private fm : FormBuilder , private router : Router){}

  ngOnInit(): void {
    this.loginForm = this.fm.group({
      email: ['', [Validators.required, Validators.email]],  
      password: ['', [Validators.required, Validators.minLength(3)]],  
    });
  }

  navigate(link : string) : void {
    this.router.navigate([link]);
  }
}
