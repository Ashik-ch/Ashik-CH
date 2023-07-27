import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarkModule } from './dark/dark.module';
import { MainpartComponent } from './dark/mainpart/mainpart.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dark/dark.module')
      .then(mdl => mdl.DarkModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
