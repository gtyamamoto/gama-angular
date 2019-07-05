import { TodoService } from '../../todo/todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contador-botoes',
  templateUrl: './contador-botoes.component.html',
  styleUrls: ['./contador-botoes.component.css']
})
export class ContadorBotoesComponent implements OnInit {

  contador = 0;
  constructor(public todoService:TodoService) {
    
   }

  ngOnInit() {
    this.todoService.contador.subscribe(value=>{
      this.contador = value;
    })
  }

}