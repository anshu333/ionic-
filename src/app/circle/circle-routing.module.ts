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
  },
  {
    path: 'my-circle',
    loadChildren: () => import('./my-circle/my-circle.module').then( m => m.MyCirclePageModule)
  },
  {
    path: 'send-request',
    loadChildren: () => import('./send-request/send-request.module').then( m => m.SendRequestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CirclePageRoutingModule {}
