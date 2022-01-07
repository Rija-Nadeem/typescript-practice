//--------class component------------
// import React from 'react';

// interface AppProps{
//   color?: string
// }

// interface AppState{
//   count: number
// }

// class App extends React.Component<AppProps, AppState>{
//   constructor(props: AppProps){
//     super(props);
//     this.state={ count: 0 }
//   }
//   onIncrement=(): void=>{ this.setState({count: this.state.count+1}) }
//   onDecrement=(): void=>{ this.setState({count: this.state.count-1}) }
//   render(){
//     return (
//       <div>
//        {this.state.count}
//        <button onClick={this.onIncrement}>Increment</button>
//        <button onClick={this.onDecrement}>Decrement</button>
//       </div>
//     );
//   }
// }

// export default App;

//-----------functional component---------

// interface AppProps{
//   color?: string
// }

// const App = (props: AppProps): JSX.Element => {
//   return <div>My color is: {props.color}</div>
// }

// export default App;

export {}
