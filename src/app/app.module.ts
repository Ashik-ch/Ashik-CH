import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModule } from './dark/dark.module';
import { ProjectComponent } from './dark/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DarkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
