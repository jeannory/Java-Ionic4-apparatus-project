import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          },
          {
            path: 'apparatuses', 
            loadChildren: '../tab1/apparatuses/apparatuses.module#ApparatusesPageModule' 
          },
          {
            path: 'apparatus-single-v1/:name', 
            loadChildren: '../tab1/apparatus-single-v1/apparatus-single-v1.module#ApparatusSingleV1PageModule' 
          },
          /** 
          {
            path: 'apparatus-single-v2', 
            loadChildren: '../tab1/apparatus-single-v2/apparatus-single-v2.module#ApparatusSingleV2PageModule'
          },
          
          {
            path: 'apparatus-new', 
            loadChildren: '../tab1/apparatus-new/apparatus-new.module#ApparatusNewPageModule'
          }
          */
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          },
          {
            path: 'map-v1', 
            loadChildren: '../tab2/map-v1/map-v1.module#MapV1PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          },
          {
            path: 'settings', 
            loadChildren: '../tab3/settings/settings.module#SettingsPageModule'
          },
          {
            path: 'framework-form',
            loadChildren: '../tab3/framework-form/framework-form.module#FrameworkFormPageModule'
          }
          /** 
          {
            path: 'loggin', 
            loadChildren: '../tab3/loggin/loggin.module#LogginPageModule'
          },
          */
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
