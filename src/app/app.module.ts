import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ContadorComponent } from './components/contador/contador.component';
import { PipenumberPipe } from './pipes/pipenumber.pipe';
import { ContadorBotoesComponent } from './components/contador-botoes/contador-botoes.component';
import { ListaTodosComponent } from './lista-todos/lista-todos.component';
import {HttpClientModule } from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';
import { CepComponent } from './components/cep/cep.component'

//ROTAS
const routes : Routes = [

  {path:'todos',component:ListaTodosComponent},
  {path:'cep/:numero',component:CepComponent},
  {path:'',component:HomeComponent,pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ContadorComponent,
    PipenumberPipe,
    ContadorBotoesComponent,
    ListaTodosComponent,
    HomeComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
