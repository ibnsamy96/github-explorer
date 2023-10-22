import { Injectable } from '@angular/core';
import { GithubProvider } from '../../../shared/models/github-provider';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from '../models/search-response.model';
import { map } from 'rxjs';
import { Repo } from '../models/repos-list.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService extends GithubProvider.Search {
  constructor(private http: HttpClient) {
    super();
  }

  search(query: string) {
    const requestUrl = this.generateReposSearchAPIUri(query);
    return this.http
      .get<SearchResponse>(requestUrl)
      .pipe(map(this.extractReposInfo));
  }

  extractReposInfo(response: SearchResponse) {
    const totalResults = response.total_count;
    const repos: Repo[] = [];

    response.items.forEach((item) => {
      const result: Repo = {
        owner: {
          name: item.owner.login,
          avatarUrl: item.owner.avatar_url,
        },
        name: item.name,
        description: item.description,
        language: item.language,
        stars: item.stargazers_count,
        forks: item.forks_count,
        issues: item.open_issues_count,
      };

      repos.push(result);
    });

    return { totalResults, repos };
  }
}
