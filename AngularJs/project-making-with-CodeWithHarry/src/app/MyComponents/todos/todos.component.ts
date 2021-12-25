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
    this.todos = [
      {
        sno: 1,
        title: "This is 1st title",
        desc: "Description",
        active: true
      },
      {
        sno: 2,
        title: "This is 2nd title",
        desc: "Description",
        active: true
      }, ,
      {
        sno: 3,
        title: "This is 3rd title",
        desc: "Description",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
