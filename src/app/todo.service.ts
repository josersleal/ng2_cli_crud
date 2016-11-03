import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoService {

    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoService {
    this.todos = this.todos.filter((todo) => {
      todo.id !== id;
    })
    return this;
  }
  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
