import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/typings/Todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private pContador = new BehaviorSubject(0);
  contador = this.pContador.asObservable();
  constructor(private httpClient : HttpClient) { }
  
  diminuir(){
    this.pContador.next(this.pContador.value-1);
  }
  aumentar(){
    this.pContador.next(this.pContador.value+1);
  }
  // API 
  getTodos(user_id) : Observable<Todo[]>{
    console.log(user_id)
    return this.httpClient.get<Todo[]>(`http://localhost:3000/users/${user_id}/todos`)

  }
  updateTodo(id,todo){
    this.httpClient.put<Todo>(`http://localhost:3000/todos/${id}`,todo)
  }
  getTodo(id){
    this.httpClient.get<Todo>(`http://localhost:3000/todos/${id}`)
  }
  sendTodo(todo : Todo){
    return this.httpClient.post('http://localhost:3000/todos',todo) 
  }
}
