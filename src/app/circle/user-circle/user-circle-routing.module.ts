import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCirclePage } from './user-circle.page';

const routes: Routes = [
  {
    path: '',
    component: UserCirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCirclePageRoutingModule {}
