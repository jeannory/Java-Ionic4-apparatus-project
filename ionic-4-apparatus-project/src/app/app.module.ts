import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
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
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

export const firebaseConfig = {
  apiKey: "*****",
  authDomain: "*****",
  databaseURL: "*****",
  projectId: "*****",
  storageBucket: "*****",
  messagingSenderId: "*****",
  appId: "*****:web:*****",
};

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
    Camera,
    File,
    FileOpener
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
