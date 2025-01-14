import { Component } from '@angular/core';
import { Router } from '@angular/router';



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
  link:"/Auth/login"
},
{
  title : "Register" ,
  link:"/Auth/register"
}
];

constructor(private router : Router){

}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  navigate(link : string):void{
    this.router.navigate([link]);
  }
}
