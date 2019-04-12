import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Inject, APP_ID, PLATFORM_ID } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS, NZ_I18N, en_US } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { velocity: 0.4, threshold: 20 }
  };
}

const APP_PROVIDERS = [
  // AppState,
  // GlobalState,
  // Title,
  // CookieService,
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: TokenInterceptor,
  //   multi: true
  // },
  // { provide: LocationStrategy, useClass: HashLocationStrategy },
  // { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }
  { provide: NZ_I18N, useValue: en_US },
  { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' },
  { provide: NZ_ICONS, useValue: icons },
  { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }
];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "memoui" }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? "in the browser" : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
