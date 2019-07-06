import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : any = {
    email:'',
    password:''
  }
  confirmpassword : string = ''
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  createUser(){
    if(this.confirmpassword!=this.user.password){
      return alert('senhas nao coincidem!')
    }
      this.authService.createAccount(this.user.email,this.user.password).subscribe(value=>{
        alert('usuario criado com sucesso!')
        localStorage.setItem('token',value.idToken)
      this.authService.setUser({
        email:value.email,
        id:value.localId
      })
      this.router.navigateByUrl('/todos')
      })
  }

}
