import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './content/table/table.component';
import { AddTaskComponent } from './content/add-task/add-task.component';
import { DataService } from './content/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: ContentComponent },
  { path: '**', component: ContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    TableComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
