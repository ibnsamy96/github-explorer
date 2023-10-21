import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/shared/layout/navbar/navbar.component';

const components = [NavbarComponent];
const modules = [CommonModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...components, ...modules],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'github-explorer';
}
