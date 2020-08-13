import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/tab1/song-details',
    loadChildren: () => import('./tab1/song-details/song-details.module').then( m => m.SongDetailsPageModule)
  },
  {
    path: 'tabs/tab1/song-details/:id',
    loadChildren: () => import('./tab1/song-details/song-details.module').then( m => m.SongDetailsPageModule)
  },
  {
    path: 'tabs/tab1/song-form',
    loadChildren: () => import('src/app/tab1/song-form/song-form.module').then( m => m.SongFormPageModule)
  },
  {
    path: 'tabs/tab1/song-form/:id',
    loadChildren: () => import('src/app/tab1/song-form/song-form.module').then( m => m.SongFormPageModule)
  },
  {
    path: 'tabs/tab2/kanta-detalye',
    loadChildren: () => import('./tab2/kanta-detalye/kanta-detalye.module').then( m => m.KantaDetalyePageModule)
  },
  {
    path: 'tabs/tab2/kanta-detalye/:id',
    loadChildren: () => import('./tab2/kanta-detalye/kanta-detalye.module').then( m => m.KantaDetalyePageModule)
  },
  {
    path: 'tabs/tab2/kanta-porma',
    loadChildren: () => import('./tab2/kanta-porma/kanta-porma.module').then( m => m.KantaPormaPageModule)
  },
  {
    path: 'tabs/tab2/kanta-porma/:id',
    loadChildren: () => import('./tab2/kanta-porma/kanta-porma.module').then( m => m.KantaPormaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
