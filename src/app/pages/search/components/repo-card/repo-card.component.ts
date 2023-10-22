import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Repo } from '../../models/repos-list.model';

@Component({
  selector: 'app-repo-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css'],
})
export class RepoCardComponent {
  @Input() repo: Repo = {
    owner: {
      name: 'nasa',
      avatarUrl:
        'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
    },
    repoName: 'fprime',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id voluptate aspernatur.',
    language: 'javascript',
    stars: 0,
    forks: 0,
    issues: 0,
  };
}
