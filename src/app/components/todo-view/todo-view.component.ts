import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit{

@Input() todo:Todo=new Todo();

@Output() deleteEvent:EventEmitter<string>=new EventEmitter();
  constructor(private http:TodoserviceService){}
  ngOnInit(): void {}


  deleteTodo(id:any){

    this.http.deleteTodo(id).subscribe((data)=>{
      alert("do you want delete todo");

    this.deleteEvent.next(id);
     // window.location.reload();
    },
    (error)=>{
      alert("some thing went to wrong")
    })
  }

}
