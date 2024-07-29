import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataProviderService} from "./services/data-provider.service";
import {HttpClientModule} from "@angular/common/http";
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    DataProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
