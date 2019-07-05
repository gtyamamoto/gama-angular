



import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ContadorComponent } from './components/contador/contador.component';
import { PipenumberPipe } from './pipes/pipenumber.pipe';
import { ContadorBotoesComponent } from './components/contador-botoes/contador-botoes.component';

import {HttpClientModule } from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';

import {FormsModule} from '@angular/forms';


//ROTAS
const routes : Routes = [
  {path:'',component:HomeComponent},
  {path:'todos',loadChildren:()=>import('./todo/todo.module').then(m=>m.TodoModule) },
  {path:'cep',loadChildren:()=>import('./cep/cep.module').then(m=>m.CepModule)},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
 

]

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    PipenumberPipe,
    ContadorBotoesComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
