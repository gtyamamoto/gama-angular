import { AuthGuard } from './../auth/auth.guard';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CepTextoComponent } from './cep-texto/cep-texto.component';
import { CepComponent } from './cep/cep.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
  {path:':numero',component:CepComponent,pathMatch:'full'},
  {path:'',component:CepTextoComponent,pathMatch:'full',canActivate:[AuthGuard]},
  
]
@NgModule({
  declarations: [
    CepComponent,
    CepTextoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class CepModule { }
