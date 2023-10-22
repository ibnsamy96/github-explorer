export interface Repo {
  owner: Owner;
  name: string;
  description: string | undefined;
  language: string | undefined;
  url: string;
  cloneUrl: string;
  devUrl: string;
  topics: string[];
  size: number;
  forks: number;
  stars: number;
  issues: number;
}

interface Owner {
  name: string;
  avatarUrl: string;
  externalLinks: ExternalLinks;
}

interface ExternalLinks {
  profile: string;
  repos: string;
  gists: string;
  stars: string;
  followers: string;
  following: string;
}
