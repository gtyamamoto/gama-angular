import { BoolPipe } from './bool.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListaTodosComponent } from './lista-todos/lista-todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { RouterModule,Routes } from '@angular/router';

const routes : Routes = [
  {path:'',component:ListaTodosComponent},
  {path:'addTodo',component:AddTodoComponent}
]

@NgModule({
  declarations: [
    TodoItemComponent,
    ListaTodosComponent,
    AddTodoComponent,
    BoolPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
   RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class TodoModule { }
