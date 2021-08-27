import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCirclePageRoutingModule } from './user-circle-routing.module';

import { UserCirclePage } from './user-circle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCirclePageRoutingModule
  ],
  declarations: [UserCirclePage]
})
export class UserCirclePageModule {}
