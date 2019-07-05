import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/typings/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() data : Todo = {
    userId:null,
    id : 0,
    title:'sac',
    description:'',
    
  };
  constructor(private auth : AuthService,private router : Router ) { }


  editar(){
    this.router.navigateByUrl(`/todos/${this.data.id}`)
  }
  ngOnInit() {
    
   
  }

}
