import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ArraydataComponent } from './arraydata/arraydata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DirectivesComponent } from './directives/directives.component';
import { BindingsComponent } from './bindings/bindings.component';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';

const myNav: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'imgcmp', component: InterpolationComponent},
  { path: 'arrcmp', component: ArraydataComponent},
  { path: 'dircmp', component: DirectivesComponent},
  { path: 'bindings', component: BindingsComponent},
  { path: 'todo', component: TodolistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ArraydataComponent,
    NavbarComponent,
    DirectivesComponent,
    BindingsComponent,
    TodoComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myNav)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
