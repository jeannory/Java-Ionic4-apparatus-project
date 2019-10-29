import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApparatusSingleV2Page } from './apparatus-single-v2.page';

const routes: Routes = [
  {
    path: '',
    component: ApparatusSingleV2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApparatusSingleV2Page]
})
export class ApparatusSingleV2PageModule {}
