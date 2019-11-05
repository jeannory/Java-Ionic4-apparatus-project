import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ApparatusSingleV2Page } from './tab1/apparatus-single-v2/apparatus-single-v2.page';
import { ApparatusNewPage } from './tab1/apparatus-new/apparatus-new.page';
import { ReactiveFormsModule } from '@angular/forms';
import { LogginPage } from './tab3/loggin/loggin.page';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent, 
    ApparatusSingleV2Page,
    ApparatusNewPage,
    LogginPage,
  ],
  entryComponents: [
    ApparatusSingleV2Page,
    ApparatusNewPage,
    LogginPage,
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
