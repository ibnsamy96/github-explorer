import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { RepoComponent } from './pages/repo/repo.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'repo/:id',
    component: RepoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
