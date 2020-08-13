import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'kanta-detalye',
    loadChildren: () => import('./kanta-detalye/kanta-detalye.module').then( m => m.KantaDetalyePageModule)
  },
  {
    path: 'kanta-detalye/:id',
    loadChildren: () => import('./kanta-detalye/kanta-detalye.module').then( m => m.KantaDetalyePageModule)
  },
  {
    path: 'kanta-porma',
    loadChildren: () => import('./kanta-porma/kanta-porma.module').then( m => m.KantaPormaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
