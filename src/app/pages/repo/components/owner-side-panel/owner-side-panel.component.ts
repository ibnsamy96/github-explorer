import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repo } from '../../models/repo-profile.model';

@Component({
  selector: 'app-owner-side-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './owner-side-panel.component.html',
  styleUrls: ['./owner-side-panel.component.css'],
})
export class OwnerSidePanelComponent {
  @Input() repo!: Repo;
}
