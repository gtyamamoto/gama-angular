import { TodoService } from 'src/app/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/Todo';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {
  todos : Todo[] = [];
  constructor(private todoService : TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(value=>{
      this.todos = value
    })
  }

}
