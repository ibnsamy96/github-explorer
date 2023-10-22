import { Injectable } from '@angular/core';
import { GithubProvider } from '../../../shared/models/github-provider';
import { HttpClient } from '@angular/common/http';
import { RepoResponse } from '../models/repo-response.model';

@Injectable({
  providedIn: 'root',
})
export class RepoService extends GithubProvider.Repo {
  constructor(private http: HttpClient) {
    super();
  }

  fetchRepo(owner: string, repoName: string) {
    const requestUrl = this.generateRepoAPIUri(owner, repoName);
    return this.http.get<RepoResponse>(requestUrl, { observe: 'response' });
  }
}
