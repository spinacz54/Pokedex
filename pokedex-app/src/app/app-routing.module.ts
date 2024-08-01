import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsComponent} from "./components/details/details.component";
import {ListComponent} from "./components/list/list.component";

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'pokemon/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
