import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoService } from './services/repo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
  owner!: string;
  repoName!: string;
  paramsSubscription!: Subscription;

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

      this.owner = params['owner'];
      this.repoName = params['repoName'];
      this.repoService.fetchRepo(this.owner, this.repoName).subscribe({
        next: (data) => {
          console.log(data);
        },
      });
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
  }
}
