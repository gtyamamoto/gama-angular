import { TodoService } from '../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/Todo';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {

  // todos$: Observable<Todo[]>;
  todos : Todo[] = [];

  constructor(private todoService : TodoService,private authservice : AuthService) { }

  ngOnInit() {
    this.authservice.currentUser.subscribe(user=>{
      if(user){
        this.todoService.getTodos(user.id).subscribe(todos=>{
          this.todos = todos
        })
      }
      // this.todos$ = this.todoService.getTodos(user.id)
    })
    
  }
  onDeleteItem(id){
    console.log(id)
    this.todoService.deleteTodo(id)
    .subscribe(v=>{
      alert('to-do deletado com sucesso!')
      this.todos = this.todos.filter(todo=>todo.id!==id)
    })
  }

}
