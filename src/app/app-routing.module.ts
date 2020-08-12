import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/tab1/song-details',
    loadChildren: () => import('src/app/tab1/song-details/song-details.module').then( m => m.SongDetailsPageModule)
  },
  {
    path: 'tabs/tab1/song-details/:id',
    loadChildren: () => import('src/app/tab1/song-details/song-details.module').then( m => m.SongDetailsPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
