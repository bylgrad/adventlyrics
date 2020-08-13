import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KantaDetalyePageRoutingModule } from './kanta-detalye-routing.module';

import { KantaDetalyePage } from './kanta-detalye.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KantaDetalyePageRoutingModule
  ],
  declarations: [KantaDetalyePage]
})
export class KantaDetalyePageModule {}
