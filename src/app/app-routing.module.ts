import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'song-details',
  //   loadChildren: () => import('./song-details/song-details.module').then( m => m.SongDetailsPageModule)
  // },
  // {
  //   path: 'song-details/:id',
  //   loadChildren: () => import('./song-details/song-details.module').then( m => m.SongDetailsPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
