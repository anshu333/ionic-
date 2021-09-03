import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCirclePageRoutingModule } from './my-circle-routing.module';

import { MyCirclePage } from './my-circle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCirclePageRoutingModule
  ],
  declarations: [MyCirclePage]
})
export class MyCirclePageModule {}
