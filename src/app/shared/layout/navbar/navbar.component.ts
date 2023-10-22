import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoading?: boolean;

  constructor(private router: Router, private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.isLoading.subscribe((val) => {
      this.isLoading = val;
    });
  }

  submitSearch(query: string) {
    query = query.trim();
    if (query)
      this.router.navigate(['/search'], {
        queryParams: { q: query },
      });
    else this.router.navigate(['/']);
  }
}
