import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() {
    let storage = localStorage.getItem("todos");
    if (storage == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(storage);
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log("Called from Main todo component: " + todo.sno);
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
