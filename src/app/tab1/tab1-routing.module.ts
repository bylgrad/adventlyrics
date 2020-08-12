import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },
  {
    path: 'song-form',
    loadChildren: () => import('./song-form/song-form.module').then( m => m.SongFormPageModule)
  },
  {
    path: 'song-form/:id',
    loadChildren: () => import('./song-form/song-form.module').then( m => m.SongFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
