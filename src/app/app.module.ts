import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MyformsComponent } from './myforms/myforms.component';
import { MdfComponent } from './mdf/mdf.component';
import { MyphotosComponent } from './myphotos/myphotos.component';

import { MyphotoService } from './myphoto.service';

const myNav: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'imgcmp', component: InterpolationComponent},
  { path: 'arrcmp', component: ArraydataComponent},
  { path: 'dircmp', component: DirectivesComponent},
  { path: 'bindings', component: BindingsComponent},
  { path: 'todo', component: TodolistComponent},
  { path: 'forms', component: MyformsComponent},
  { path: 'mdf', component: MdfComponent},
  { path: 'photos', component: MyphotosComponent}
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
    TodolistComponent,
    MyformsComponent,
    MdfComponent,
    MyphotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myNav)
  ],
  providers: [MyphotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
