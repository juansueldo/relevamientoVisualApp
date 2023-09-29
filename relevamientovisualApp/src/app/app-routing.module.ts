import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cosas-lindas',
    loadChildren: () => import('./pages/cosas-lindas/cosas-lindas.module').then( m => m.CosasLindasPageModule)
  },
  {
    path: 'cosas-feas',
    loadChildren: () => import('./pages/cosas-feas/cosas-feas.module').then( m => m.CosasFeasPageModule)
  },
  {
    path: 'mis-fotos',
    loadChildren: () => import('./pages/mis-fotos/mis-fotos.module').then( m => m.MisFotosPageModule)
  },
  {
    path: 'graficos',
    loadChildren: () => import('./pages/graficos/graficos.module').then( m => m.GraficosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
