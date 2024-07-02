// Import React library (optional, but recommended for clarity)
import React from 'react';
import './Greeting.css';

// Interface to define the expected type for the 'name' prop
interface GreetingProps {
  name: string ; // Specify that 'name' prop should be a string
}

// Functional component with type annotations for props and return value
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Return JSX element
  return (
    <div className='HelloText'>
      Hello, {name}!  {/* Use correct string literal for greeting */}
    </div>
  );
};

export default Greeting;