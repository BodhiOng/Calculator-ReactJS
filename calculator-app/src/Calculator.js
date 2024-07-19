import React, { useEffect, useState } from 'react';
import Header from './Header';
import './Calculator.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [display, setDisplay] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false); 

  useEffect(() => {
    if (isResultDisplayed) {
      setDisplay(result);
    } else {
      setDisplay(input);
    }
  }, [input, result, isResultDisplayed]);

  const handleClick = (value) => {
    if (isResultDisplayed) {
      if (['+', '-', '*', '/'].includes(value)) {
        setInput(result + value); 
      } else {
        setInput(value);
      }
      setIsResultDisplayed(false);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    setIsResultDisplayed(false); 
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); 
      setIsResultDisplayed(true); 
      setInput(''); 
    } catch (error) {
      setResult('Error');
      setIsResultDisplayed(true); 
      setInput(''); 
    }
  };

  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header />
      </div>

      <div className='main-content'>
        <div className="calculator">
          <div className="display">
            <input type="text" value={display} readOnly />
          </div>
          
          <div className="buttons">
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('+')} className='operator-button'>+</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('-')} className='operator-button'>-</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('*')} className='operator-button'>*</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={handleClear} className='clear-button'>C</button>
            <button onClick={handleCalculate} className='equal-button'>=</button>
            <button onClick={() => handleClick('/')} className='operator-button'>/</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Calculator;