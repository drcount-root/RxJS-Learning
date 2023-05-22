import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import {AsyncawaitComponent} from './asyncawait/asyncawait.component'
import {ObservableComponent} from './observable/observable.component'

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: 'asyncawait', component: AsyncawaitComponent},
  {path: 'observable', component: ObservableComponent},
  {path: '', redirectTo: 'promise', pathMatch: 'full'},
  {path: '**', redirectTo: 'promise', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
