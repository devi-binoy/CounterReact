import "./App.css";
import React, {Component} from 'react';

class App extends Component {
  state = { 
    num : 0
   } 

   increment = () => {
     this.setState({num : this.state.num+1});
   }

   decrement = () => {
    this.setState({num : this.state.num-1});
  }

  render() { 
  
    return (
      <div className = 'App'>
        <div className='showcase'>
          <h1>{this.state.num}</h1>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}
 
export default App;