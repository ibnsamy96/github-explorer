import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  submitSearch(query: string) {
    query = query.trim();
    if (query)
      this.router.navigate(['/search'], {
        queryParams: { q: query },
      });
    else this.router.navigate(['/']);
  }
}
