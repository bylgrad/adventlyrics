import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongFormPageRoutingModule } from './song-form-routing.module';

import { SongFormPage } from './song-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongFormPageRoutingModule
  ],
  declarations: [SongFormPage]
})
export class SongFormPageModule {}
