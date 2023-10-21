import { Injectable } from '@angular/core';
import { GithubProvider } from '../../../shared/models/github-provider';

@Injectable({
  providedIn: 'root',
})
export class RepoService extends GithubProvider.Repo {
  constructor() {
    super();
  }
}
