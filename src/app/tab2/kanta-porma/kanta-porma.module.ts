import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KantaPormaPageRoutingModule } from './kanta-porma-routing.module';

import { KantaPormaPage } from './kanta-porma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KantaPormaPageRoutingModule
  ],
  declarations: [KantaPormaPage]
})
export class KantaPormaPageModule {}
