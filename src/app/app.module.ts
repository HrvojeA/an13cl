import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiHeaderComponent } from './component/ui-header/ui-header.component';
import { ContentComponent } from './component/content/content.component';
import { SubHeaderComponent } from './component/sub-header/sub-header.component';
import { ProductComponent } from './component/product/product.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    UiHeaderComponent,
    ContentComponent,
    SubHeaderComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    TransferHttpCacheModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
