import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './services/search.service';
import { Subscription } from 'rxjs';
import { SearchResponse } from './models/search-response.model';
import { ReposList, Repo } from './models/repos-list.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  paramsSubscription!: Subscription;

  searchQuery!: string;
  fetchedPagesCounter = 0;

  totalResults!: number;
  searchResults!: ReposList;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    const paramsSubscription = this.route.queryParams.subscribe((params) => {
      // If no query param is passed, then navigate to home and unsubscribe
      if (!params['q']) {
        this.router.navigate(['/']);
        return;
      }

      this.searchQuery = params['q'];
      this.searchService.search(params['q']).subscribe({
        next: (data) => {
          this.fetchedPagesCounter++;
          this.totalResults = data.totalResults;
          this.searchResults = data.repos;
        },
      });
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
  }
}
