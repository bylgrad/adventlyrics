import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongFormPage } from './song-form.page';

const routes: Routes = [
  {
    path: '',
    component: SongFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongFormPageRoutingModule {}
