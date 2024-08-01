import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {RouteReuseStrategy} from "@angular/router";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DetailsComponent} from './components/details/details.component';
import {FilterComponent} from './components/filter/filter.component';
import {ListComponent} from './components/list/list.component';
import {CustomRouteReuseStrategy} from "./CustomRouteReuseStrategy";
import {ActionFacadeService} from "./facades/action-facade.service";
import {ViewFacadeService} from "./facades/view-facade.service";
import {DataProviderService} from "./services/data-provider.service";
import {StateService} from "./services/state.service";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FilterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinner
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    DataProviderService,
    StateService,
    ActionFacadeService,
    ViewFacadeService,
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
