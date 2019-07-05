import { TodoService } from 'src/app/todo/todo.service';
import { Todo } from 'src/typings/Todo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo : Todo = {
    id:null,
    title:'',
    date:'',
    description:'',
    finished:false
  }
  email : string = ''
  constructor(private todoservice : TodoService,private router:Router) { }

  ngOnInit() {
  }
  postTodo (){
    this.todoservice.sendTodo(this.todo).subscribe(res=>{
      alert('TODO ADD COM SUCESSO!!!!!!!!!!!!!!!!!!')
      this.router.navigateByUrl('/todos')
    })
  }

}
