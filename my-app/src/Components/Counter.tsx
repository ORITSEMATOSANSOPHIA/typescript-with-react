import React from 'react'; // Import the entire React library
import './Counter.css';


interface CounterState {
  count: number;
}

class Counter extends React.Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className='Counting'>
        <p>Count: {this.state.count}</p>
        <button className='ButtonIncrement' onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;