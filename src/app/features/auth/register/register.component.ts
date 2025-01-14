import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone:false
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;

  constructor(private fm : FormBuilder){}

  ngOnInit(): void {
      this.registerForm = this.fm.group({
        name : ['' , [Validators.required , Validators.min(3)]],
        email : ['' , [Validators.required , Validators.email]],
        password : ['' , [Validators.required , Validators.min(3)]],
      })
  }
}
