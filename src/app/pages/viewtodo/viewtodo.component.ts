import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-viewtodo',
  templateUrl: './viewtodo.component.html',
  styleUrls: ['./viewtodo.component.css']
})
export class ViewtodoComponent implements OnInit{

  todos: Todo[]=[];
  constructor(private http:TodoserviceService){}
  ngOnInit(): void {
    this.http.getTodo().subscribe({next:(data)=>{
      console.log(data)
      this.todos=data;
      },
      error:(error)=>{
        console.log("something went to wrong")
      },
      complete:()=>{
      }

    })   
  }
  deleteEventFormChild(todoId:String){

    this.todos=this.todos.filter((todo)=>  todo.id !=todoId);
  }
 


}
