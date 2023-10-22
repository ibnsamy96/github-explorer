import { Injectable } from '@angular/core';
import { GithubProvider } from '../../../shared/models/github-provider';
import { HttpClient } from '@angular/common/http';
import { RepoResponse } from '../models/repo-response.model';
import { map } from 'rxjs';
import { Repo } from '../models/repo-profile.model';

@Injectable({
  providedIn: 'root',
})
export class RepoService extends GithubProvider.Repo {
  constructor(private http: HttpClient) {
    super();
  }

  fetchRepo(owner: string, repoName: string) {
    const requestUrl = this.generateRepoAPIUri(owner, repoName);
    return this.http
      .get<RepoResponse>(requestUrl)
      .pipe(map(this.extractRepoInfo));
  }

  extractRepoInfo(response: RepoResponse) {
    const repo: Repo = {
      owner: {
        name: response.owner.login,
        avatarUrl: response.owner.avatar_url,
        externalLinks: {
          profile: '',
          repos: '',
          gists: '',
          followers: '',
          following: '',
          stars: '',
        },
      },
      url: response.html_url,
      cloneUrl: response.clone_url,
      name: response.name,
      description: response.description,
      language: response.language,
      stars: response.stargazers_count,
      forks: response.forks_count,
      issues: response.open_issues_count,
      size: response.size,
      topics: response.topics,
    };

    repo.owner.externalLinks.profile = `https://github.com/${repo.owner.name}`;
    repo.owner.externalLinks.gists = `https://gist.github.com/${repo.owner.name}`;
    repo.owner.externalLinks.repos = `${repo.owner.externalLinks.profile}?tab=repositories`;
    repo.owner.externalLinks.stars = `${repo.owner.externalLinks.profile}?tab=stars`;
    repo.owner.externalLinks.followers = `${repo.owner.externalLinks.profile}?tab=followers`;
    repo.owner.externalLinks.following = `${repo.owner.externalLinks.profile}?tab=following`;

    return repo;
  }
}
