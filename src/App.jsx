import React, { useState } from 'react';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const validateInputs = () => {
    if (input1 === '' || input2 === '') {
      setError('Numbers cannot be empty');
      return false;
    }
    if (isNaN(input1) || isNaN(input2)) {
      setError('Inputs must be valid numbers');
      return false;
    }
    setError('');
    return true;
  };

  const calculate = (operation) => {
    if (!validateInputs()) return;

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let res;

    if(operation == '+') {
        res = num1 + num2;
    }
    else if(operation == '-'){
        res = num1 - num2;
    }
    else if(operation == '*'){
        res = num1 * num2;
    }
    if(operation == '/'){
      if (num2 === 0) {
        setError('Cannot divide by zero');
        return;
      }
      else {
        res = num1 / num2;
      }
    }
    setResult(res);
  };

  return (
    <div className='main'>
    <div className="App">
      <h1>React Calculator</h1>
      <div>
        <input type="text" value={input1}
          onChange={(e) => handleInputChange(e, setInput1)}
          placeholder="Enter first number"/>
      </div>
      <div>
        <input type="text" value={input2}
          onChange={(e) => handleInputChange(e, setInput2)}
          placeholder="Enter second number"/>
      </div>
      <div>
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('/')}>/</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && !error && <p style={{ color: 'black' }}>Result: {result}</p>}
    </div>
    </div>
  );
}

export default App;
