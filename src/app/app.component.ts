
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import {asyncScheduler} from 'rxjs'
import { map,throttleTime,debounceTime} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contador = 0;
  constructor(public todoService : TodoService){

  }
  ngOnInit(): void {


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
