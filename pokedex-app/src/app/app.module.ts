import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataProviderService} from "./services/data-provider.service";
import {HttpClientModule} from "@angular/common/http";
import { ListComponent } from './components/list/list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { FilterComponent } from './components/filter/filter.component';
import {StateService} from "./services/state.service";
import {ActionFacadeService} from "./facades/action-facade.service";
import {ViewFacadeService} from "./facades/view-facade.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailsComponent } from './components/details/details.component';

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
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinner
  ],
  providers: [
    provideClientHydration(),
    DataProviderService,
    StateService,
    ActionFacadeService,
    ViewFacadeService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
