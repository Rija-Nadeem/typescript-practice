import { Dispatch } from "redux";
import axios from 'axios';
import { ActionTypes } from './types';

export interface Todo{
  id: number,
  title: string,
  completed: boolean
}

export interface FetchTodosAction{
  type: ActionTypes.fetchTodo,
  payload: Todo[]
}

export interface DeleteTodosAction{
  type: ActionTypes.deleteTodo,
  payload: number
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodo=()=>{
  return async(dispatch: Dispatch)=>{
    const response = await axios.get<Todo[]>(url)
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodo,
      payload: response.data
    })
  }
}

export const deleteTodo=(id: number): DeleteTodosAction=>{
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  }
}