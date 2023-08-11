import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
   constructor(private apiser:TodoserviceService){}
  todo=new Todo();
  submit() {

    if(this.todo.title.trim()==''||this.todo.title==null){
     alert("title is required")
      return;
     }
     if(this.todo.content.trim()==''||this.todo.content==null){
      alert("content is required")
       return;
      }
      console.log(this.todo)
      this.apiser.addtodo(this.todo).subscribe({next:(data)=>{
       console.log(data);
       this.todo=new Todo();
        alert("data is added successfully")
      },
    error:(error)=>{
      console.log(error)
    },
  complete:()=>{
    console.log("request is completed")
  }})
  this.todo
    }

}
