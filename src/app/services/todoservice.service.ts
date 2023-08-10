import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  
   baseUrl="http://localhost:9797/todo/"
  constructor(private http:HttpClient) { }

  addtodo(todo:Todo){
  return this.http.post<Todo>(`${this.baseUrl}`,todo);
  }

  getTodo(){
   return this.http.get<Todo[]>(`${this.baseUrl}`)
  }
}
