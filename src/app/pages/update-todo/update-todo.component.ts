import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent {

  todo=new Todo();
submit() {
throw new Error('Method not implemented.');
}

}
