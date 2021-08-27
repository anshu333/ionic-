import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CirclePage } from './circle.page';

const routes: Routes = [
  {
    path: '',
    component: CirclePage
  },
  {
    path: 'user-circle',
    loadChildren: () => import('./user-circle/user-circle.module').then( m => m.UserCirclePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CirclePageRoutingModule {}
