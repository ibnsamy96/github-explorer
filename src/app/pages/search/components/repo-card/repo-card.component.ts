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
  @Input() repo!: Repo;
}
