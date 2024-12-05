import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
// import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
   /* Parent component for Angular. It consists of child Component*/
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coforge-limited';
}
