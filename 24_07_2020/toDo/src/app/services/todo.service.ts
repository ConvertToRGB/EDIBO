import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // todosUrl:string = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) {}

  // get todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // toggle completed

  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  
}


// [
//   {
//     id: 1,
//     title: 'Todo One',
//     completed: false
//   },
//   {
//     id: 2,
//     title: 'Todo Two',
//     completed: true
//   },
//   {
//     id: 3,
//     title: 'Todo Three',
//     completed: false
//   },
// ]