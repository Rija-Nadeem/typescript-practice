import React from 'react';
import {connect} from 'react-redux';
import { fetchTodo, deleteTodo, Todo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps{
  todos: Todo[];
  fetchTodo: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps>{

  state={loading: false}

  componentDidUpdate(prevProps: AppProps): void{
    if(!prevProps.todos.length && this.props.todos.length) this.setState({loading: false})
  }

  onFetchTodo=(): void=>{
    this.setState({loading: true})
    this.props.fetchTodo()
  }
  onDelete=(id: number): void=>{
    this.props.deleteTodo(id)
  }
  renderList=(): JSX.Element[] =>{
    return this.props.todos.map((todo: Todo)=><div key={todo.id} onClick={() =>this.onDelete(todo.id)}>{todo.title}</div>)
  }
  render() {
    return (
      <div>
        {this.state.loading && 'loading...'}
       <button onClick={this.onFetchTodo}>Fetch</button>
       {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps=(state: StoreState): {todos: Todo[]} =>{
  return { todos: state.todos }
}

export const App = connect(mapStateToProps,{fetchTodo, deleteTodo})(_App);