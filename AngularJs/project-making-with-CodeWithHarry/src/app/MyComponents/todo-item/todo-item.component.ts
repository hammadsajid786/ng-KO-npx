import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteEventEmitter: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    this.deleteEventEmitter.emit(todo);
    console.log("Button clicked in todo-item components." + todo.sno);
  }

}
