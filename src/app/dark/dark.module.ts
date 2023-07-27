import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';

/**Routes */
const router: Routes = [
  { path: '', component: MainpartComponent }
];


const components = [
  SideBarComponent,
  MainpartComponent,
  NavComponent
]

@NgModule({
  declarations: [
    components
  ],

  imports: [
    CommonModule,
    CommonModule, RouterModule.forChild(router)
  ],

  exports: [components]
})
export class DarkModule { }
