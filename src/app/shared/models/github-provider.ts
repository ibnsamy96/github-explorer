export class GithubProvider {
  protected apiHost = 'https://api.github.com';

  getSearchAPI(query: string) {
    return this.apiHost + `/search/repositories?q=${query}`;
  }

  getRepoAPI(owner: string, repoName: string) {
    return this.apiHost + `/repos/${owner}/${repoName}`;
  }
}
