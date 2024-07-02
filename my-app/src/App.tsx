
import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Greeting from './Components/Greeting';


function App() {
  const name = "World"; // Define a name variable to pass as a prop

  return (
    <div className="App">
      
      < Greeting name={name} /> {/* Pass the 'name' prop */}
      <Counter />
    </div>
  );
}
export default App;
