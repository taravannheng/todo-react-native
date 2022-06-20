import {observable, action} from 'mobx';
import {persist} from 'mobx-persist';

export default class TodoListStore {
  @persist('list') @observable todoList = [];

  @action addTodo(newTodo) {
    if (newTodo !== null && newTodo !== undefined && newTodo !== '') {
      this.todoList.push(newTodo);
    }
  }

  @action removeTodo(todoId) {
    this.todoList = this.todoList.filter(todo => todo.id !== todoId);
  }

  @action reset() {
    this.todoList = [];
  }

  getTodoList() {
    return this.todoList;
  }
}
