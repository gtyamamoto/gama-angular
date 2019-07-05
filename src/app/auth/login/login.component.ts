import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any = {
    email:'',
    password:''
  }
  constructor(private authService : AuthService,private router:Router) { }

  ngOnInit() {
  }
  logUser(){
    this.authService
    .login(this.user.email,this.user.password)
    .subscribe(val=>{
      console.log(val)
      localStorage.setItem('token',val.idToken)
      this.authService.setUser({
        email:val.email,
        id:val.localId
      })
      alert('usuario logado!')
      this.router.navigateByUrl('/todos')
    },error=>{
      console.log(error);
      switch (error.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          alert('email nao cadastrado')
          break;
        case 'INVALID_PASSWORD':
          alert('senha incorreta')
          break;
        default: alert('erro desconhecido,tente novamente')
  
      }
    })
  }

}
