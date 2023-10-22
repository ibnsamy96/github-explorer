import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoService } from './services/repo.service';
import { Subscription } from 'rxjs';
import { Repo } from './models/repo-profile.model';
import { OwnerSidePanelComponent } from './components/owner-side-panel/owner-side-panel.component';
import { RepoInfoComponent } from './components/repo-info/repo-info.component';
import { LoadingService } from '../../shared/services/loading.service';
import { LoaderComponent } from '../../shared/layout/navbar copy/loader.component';

@Component({
  selector: 'app-repo',
  standalone: true,
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  imports: [
    CommonModule,
    OwnerSidePanelComponent,
    RepoInfoComponent,
    LoaderComponent,
  ],
})
export class RepoComponent implements OnInit {
  isLoading?: boolean;

  paramsSubscription!: Subscription;

  repo!: Repo;

  // isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private repoService: RepoService
  ) {}

  ngOnInit(): void {
    this.loadingService.isLoading.subscribe((val) => {
      this.isLoading = val;
    });

    this.paramsSubscription = this.route.params.subscribe((params) => {
      // If no owner or repoName, then navigate to home
      if (!params['owner'] || !params['repoName']) {
        this.router.navigate(['/']);
        return;
      }

      this.loadingService.show();

      this.repoService
        .fetchRepo(params['owner'], params['repoName'])
        .subscribe({
          next: (repo) => {
            this.isLoading = false;
            this.repo = repo;
            this.loadingService.hide();
          },
        });
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
  }
}
