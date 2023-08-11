import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Todo } from 'src/app/model/todo';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit{

  todo=new Todo();
   id='';

  constructor(private todoser:TodoserviceService, private active:ActivatedRoute){}
  

  
  
  ngOnInit(): void {
   this.id=this.active.snapshot.params['id'];
    this.todoser.getTodoById(this.id).subscribe({next:(data)=>{
      this.todo=data;
    }})
  }
submit() {
this.todoser.updateTodo(this.todo,this.id).subscribe({next:(data)=>{
  alert("data is successfully updated")
  this.todo=data;
},
error:(error)=>{
  console.log(error);
  alert("data is not updated")
}})
}

}
