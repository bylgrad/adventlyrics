import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KantaPormaPage } from './kanta-porma.page';

const routes: Routes = [
  {
    path: '',
    component: KantaPormaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KantaPormaPageRoutingModule {}
