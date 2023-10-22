import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './services/search.service';
import { Subscription } from 'rxjs';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { ReposList, Repo } from './models/repos-list.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RepoCardComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  paramsSubscription!: Subscription;

  searchQuery!: string;
  fetchedPagesCounter = 0;
  fetchingPagesCounter = 0;

  totalResults!: number;
  searchResults!: ReposList;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // to fetch the new page earlier, the app starts fetching it {100} pixels before the page end
    const negatablePixels = 100;

    const windowScroll =
      Math.ceil(window.innerHeight) +
      Math.ceil(window.scrollY) +
      negatablePixels;
    const pageHeight = document.body.scrollHeight;

    if (
      windowScroll >= pageHeight &&
      this.fetchingPagesCounter == this.fetchedPagesCounter
    ) {
      if (this.totalResults && this.totalResults > this.searchResults.length) {
        this.fetchingPagesCounter++;

        this.searchService
          .search(this.searchQuery, this.fetchedPagesCounter + 1)
          .subscribe({
            next: (data) => {
              this.fetchedPagesCounter++;

              this.searchResults.push(...data.repos);
            },
          });
      }
    }
  }

  ngOnInit(): void {
    const paramsSubscription = this.route.queryParams.subscribe((params) => {
      // If no query param is passed, then navigate to home and unsubscribe
      if (!params['q']) {
        this.router.navigate(['/']);
        return;
      }

      this.fetchingPagesCounter++;
      this.searchQuery = params['q'];
      this.searchService
        .search(params['q'], this.fetchedPagesCounter + 1)
        .subscribe({
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
