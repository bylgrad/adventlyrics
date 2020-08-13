import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KantaDetalyePage } from './kanta-detalye.page';

const routes: Routes = [
  {
    path: '',
    component: KantaDetalyePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KantaDetalyePageRoutingModule {}
