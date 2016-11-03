import { Todo } from './todo';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('Given a TodoService ', () => {
  let SUT: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  // it('be true ...', inject([TodoService], (service: TodoService) => {
  //   expect(service).toBeTruthy();
  // }));


  beforeEach(() => {
    SUT = new TodoService();
  });

  it('should return an empty array by default', () => {
    expect(SUT.getAllTodos().length).toEqual(0);
  });
  
  it('returns all todos', () => {
    let todo1 = new Todo({title: 'Hello 1', complete: false});
    let todo2 = new Todo({ title: 'Hello 2', complete: true });
    SUT.addTodo(todo1);
    SUT.addTodo(todo2);

    expect(SUT.getAllTodos()).toEqual([todo1, todo2]);
      
  });
    

});
