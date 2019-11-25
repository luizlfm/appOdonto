import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrincipalPage } from './principal.page';
import { HomePopoverComponent } from '../home-popover/home-popover.component';
import { LocationPopoverComponent } from '../location-popover/location-popover.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [HomePopoverComponent, LocationPopoverComponent],
  declarations: [PrincipalPage, HomePopoverComponent, LocationPopoverComponent]
})
export class PrincipalPageModule {}
