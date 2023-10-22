import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repo } from '../../models/repo-profile.model';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-repo-info',
  standalone: true,
  imports: [CommonModule, ClipboardModule],
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css'],
})
export class RepoInfoComponent {
  @Input() repo!: Repo;
  showCopiedTooltip = false;

  onClipboardCopy() {
    this.showCopiedTooltip = true;
    setTimeout(() => {
      this.showCopiedTooltip = false;
    }, 5500);
    // console.log('codeCopied');
  }
}
