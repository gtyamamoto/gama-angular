import { AuthService } from './auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import {asyncScheduler, Observable} from 'rxjs'
import { map,throttleTime,debounceTime} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contador = 0;
  user$ : Observable<any>;
  // email = '';
  constructor(public todoService : TodoService, private authService : AuthService){

  }
  logout(){
    this.authService.logout()
    
  }
  ngOnInit(): void {

    const token = localStorage.getItem('token')
    if(token!=``){
      this.authService.verifyToken(token).subscribe(v=>{
        console.log(v)
        this.authService.setUser({email:v.users[0].email,id:v.users[0].localId})
      },error=>{
        console.warn(error)
      })
    }
    this.user$ = this.authService.currentUser;
    // this.authService.currentUser.subscribe((user)=>{
    //   if(user!==null) this.email = user.email
    // })

    this.todoService.contador
    .pipe(
      map(x=>x*2),
      debounceTime(500,asyncScheduler)
    )
    .subscribe(value=>{
      this.contador = value;
    })


  }

}
