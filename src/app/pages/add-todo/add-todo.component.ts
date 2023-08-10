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
      console.log(this.todo)
      this.apiser.addtodo(this.todo).subscribe({next:(data)=>{
       console.log(data);
        alert("data is added successfully")
      },
    error:(error)=>{
      console.log(error)
    },
  complete:()=>{
    console.log("request is completed")
  }})
    }

}
