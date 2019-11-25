import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomePopoverComponent } from '../home-popover/home-popover.component';
import { LocationPopoverComponent } from '../location-popover/location-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  entryComponents: [HomePopoverComponent, LocationPopoverComponent],
  declarations: [HomePage, HomePopoverComponent, LocationPopoverComponent]
})
export class HomePageModule {}
