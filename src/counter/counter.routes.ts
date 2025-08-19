import { Routes } from '@angular/router';
import { UI } from './pages/ui';
import { Counter } from './counter';
export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: Counter,
    children: [],
  },
  {
    path: 'UI',
    component: UI,
  },
];
