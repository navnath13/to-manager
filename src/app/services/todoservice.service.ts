import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  
   baseUrl="http://localhost:9797"
  constructor(private http:HttpClient) { }

  addtodo(todo:Todo){
  return this.http.post<Todo>(`${this.baseUrl}/todo/`,todo);
  }

  getTodo(){
   return this.http.get<Todo[]>(`${this.baseUrl}/todo/`)
  }
  deleteTodo(id:any){
    return this.http.delete(`${this.baseUrl}/todo/${id}`)
   }
   getTodoById(id:string){
   return this.http.get<Todo>(`${this.baseUrl}/todo/${id}`)
   }
   updateTodo(todo:Todo,id:string){
   return this.http.put<Todo>(`${this.baseUrl}/todo/${id}`,todo);
   }
}
