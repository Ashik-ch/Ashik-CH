import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';
import { NgxGalaxyComponent } from '@omnedia/ngx-galaxy';

/**Routes */
const router: Routes = [
  { path: '', component: MainpartComponent },
  { path: 'project/:id', component: ProjectComponent }
];

const components = [
  SideBarComponent,
]

@NgModule({
  declarations: [
    components
  ],

  imports: [
    CommonModule,
    FormsModule,
    NgxGalaxyComponent,
    CommonModule, RouterModule.forChild(router)
  ],

  exports: [components]
})
export class DarkModule { }
