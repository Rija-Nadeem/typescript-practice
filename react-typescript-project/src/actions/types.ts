import { FetchTodosAction, DeleteTodosAction } from './index';

export enum ActionTypes{
  fetchTodo,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodosAction 