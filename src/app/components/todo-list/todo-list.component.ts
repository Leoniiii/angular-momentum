import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mockTodoList } from 'src/app/constants/todo.constant';
import { TodoModel } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Output() todoItem = new EventEmitter<string>();
  newTodoItem = '';
  todoItems: TodoModel[] = mockTodoList;

  submitTodo(): void {
    if (this.newTodoItem.length == 0) return;
    this.todoItems = [
      ...this.todoItems,
      {
        id: this.todoItems.length,
        title: this.newTodoItem,
        status: 'todo',
        completed: false,
      },
    ];
    this.newTodoItem = '';
  }
}
