import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { globalRouteAnimations } from './core/animations';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations:[globalRouteAnimations]
})
export class AppComponent {
  title = 'PigeonSky-Front';

  prepareRoute(outlet: RouterOutlet) {
    console.log('Route transition triggered:', outlet.activatedRouteData);
    return true; 
  }  
}
