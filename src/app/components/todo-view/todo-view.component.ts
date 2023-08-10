import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit{

todo: Todo[]=[];
  constructor(private http:TodoserviceService){}
  ngOnInit(): void {
    this.http.getTodo().subscribe({next:(data)=>{
      console.log(data)
      this.todo=data;
      },
      error:(error)=>{
        console.log("something went to wrong")
      },
      complete:()=>{
      }

    })
 
    
  }


  deleteTodo(id:number){

  }

}
