import { AuthService } from '../../auth/auth.service';
import { TodoService } from 'src/app/todo/todo.service';
import { Todo } from 'src/typings/Todo';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo : Todo = {
    id:null,
    userId:'',
    title:'',
    date:'',
    description:'',
    finished:false
  }
  email : string = ''
  isEdit : boolean = false
  constructor(private auth : AuthService,private todoservice : TodoService,private router:Router,private activatedroute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(params=>{
      if(params.id) {
        this.isEdit = true
        this.todoservice.getTodo(params.id).subscribe(todo=>this.todo=todo)
      }
    })
    
    this.auth.currentUser.subscribe(user=>{
      if(user)
      this.todo.userId = user.id
      else
      this.router.navigateByUrl('/')
    })
  }
  postTodo (){
    if(this.isEdit){
      this.todoservice.updateTodo(this.todo.id,this.todo).subscribe(res=>{
        alert('TODO Atualizado COM SUCESSO!!!!!!!!!!!!!!!!!!')
        this.router.navigateByUrl('/todos')
      })
    }else
    this.todoservice.sendTodo(this.todo).subscribe(res=>{
      alert('TODO ADD COM SUCESSO!!!!!!!!!!!!!!!!!!')
      this.router.navigateByUrl('/todos')
    })
  }

}
