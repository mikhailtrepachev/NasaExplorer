import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExoplanetDetailPage } from './exoplanets/pages/exoplanet-detail.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'apod',
    pathMatch: 'full'
  },
  {
    path: 'apod',
    loadChildren: () => import('./apod/apod.module').then(m => m.ApodPageModule),
  },
  {
    path: 'exoplanets',
    loadChildren: () => import('./exoplanets/exoplanets.module').then(m => m.ExoplanetsPageModule),
  },
  {
    path: 'saved',
    loadChildren: () => import('./saved/saved.module').then(m => m.SavedModule),
  },
  {
    path: 'exoplanet-details', 
    component: ExoplanetDetailPage,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
