export type ReposList = Repo[];

export interface Repo {
  owner: {
    name: string;
    avatarUrl: string;
  };
  repoName: string;
  description: string | undefined;
  forks: number;
  stars: number;
  issues: number;
  language: string | undefined;
}
