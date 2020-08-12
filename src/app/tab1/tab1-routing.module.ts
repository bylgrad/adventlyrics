import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'song-details',
        loadChildren: () => import('../song-details/song-details.module').then( m => m.SongDetailsPageModule)
      },
      {
        path: 'song-details/:id',
        loadChildren: () => import('../song-details/song-details.module').then( m => m.SongDetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
