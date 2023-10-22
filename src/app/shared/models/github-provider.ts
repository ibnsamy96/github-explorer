class GithubAPI {
  protected apiHost = 'https://api.github.com';
}

export class GithubReposSearch extends GithubAPI {
  generateReposSearchAPIUri(query: string, page: number) {
    return this.apiHost + `/search/repositories?q=${query}&page=${page}`;
  }
}

export class GithubRepoRetrieving extends GithubAPI {
  generateRepoAPIUri(owner: string, repoName: string) {
    return this.apiHost + `/repos/${owner}/${repoName}`;
  }
}

export const GithubProvider = {
  Search: GithubReposSearch,
  Repo: GithubRepoRetrieving,
};
