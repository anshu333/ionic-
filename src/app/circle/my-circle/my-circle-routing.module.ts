import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCirclePage } from './my-circle.page';

const routes: Routes = [
  {
    path: '',
    component: MyCirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCirclePageRoutingModule {}
