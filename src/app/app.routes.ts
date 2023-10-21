import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { RepoComponent } from './pages/repo/repo.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
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
