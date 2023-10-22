import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoService } from './services/repo.service';
import { Subscription } from 'rxjs';
import { Repo } from './models/repo-profile.model';
import { OwnerSidePanelComponent } from './components/owner-side-panel/owner-side-panel.component';
import { RepoInfoComponent } from './components/repo-info/repo-info.component';

@Component({
  selector: 'app-repo',
  standalone: true,
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  imports: [CommonModule, OwnerSidePanelComponent, RepoInfoComponent],
})
export class RepoComponent implements OnInit {
  paramsSubscription!: Subscription;

  repo!: Repo;

  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private repoService: RepoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // If no owner or repoName, then navigate to home
      if (!params['owner'] || !params['repoName']) {
        this.router.navigate(['/']);
        return;
      }

      this.repoService
        .fetchRepo(params['owner'], params['repoName'])
        .subscribe({
          next: (repo) => {
            this.isLoading = false;
            this.repo = repo;
          },
        });
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
  }
}
