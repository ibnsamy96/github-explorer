import { Injectable } from '@angular/core';
import { GithubProvider } from '../../../shared/models/github-provider';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService extends GithubProvider.Search {
  constructor(private http: HttpClient) {
    super();
  }

  search(query: string) {
    const requestUrl = this.generateReposSearchAPIUri(query);
    return this.http.get<SearchResponse>(requestUrl);
  }
}
