import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  //{ path: 'single-view', loadChildren: './tab2/single-view/single-view.module#SingleViewPageModule' },
  //{ path: 'new-view', loadChildren: './tab2/new-view/new-view.module#NewViewPageModule' },
  //{ path: 'set-coordinates', loadChildren: './tab2/set-coordinates/set-coordinates.module#SetCoordinatesPageModule' },
  //{ path: 'framework-form', loadChildren: './tab3/framework-form/framework-form.module#FrameworkFormPageModule' },
  //{ path: 'loggin', loadChildren: './tab3/loggin/loggin.module#LogginPageModule' },
  //{ path: 'apparatus-new', loadChildren: './tab1/apparatus-new/apparatus-new.module#ApparatusNewPageModule' },
  //{ path: 'apparatus-single-v2', loadChildren: './tab1/apparatus-single-v2/apparatus-single-v2.module#ApparatusSingleV2PageModule' },
  //{ path: 'settings', loadChildren: './tab3/settings/settings.module#SettingsPageModule' },
  //{ path: 'apparatus-single-v1', loadChildren: './tab1/apparatus-single-v1/apparatus-single-v1.module#ApparatusSingleV1PageModule' },
  //{ path: 'apparatuses', loadChildren: './tab1/apparatuses/apparatuses.module#ApparatusesPageModule' },
  /** 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
