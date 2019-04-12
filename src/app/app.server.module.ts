import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    FlexLayoutServerModule
  ],
  providers: [
    // Add universal-only providers here
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
