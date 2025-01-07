import { Component } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: false ,
})
export class NavbarComponent {
  isMenuOpen = false;

public links = [
{
  title : "Home" ,
  link : "" 
},
{
  title : "Login" ,
  link:"login"
},
{
  title : "Register" ,
  link:"register"
}
];
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
