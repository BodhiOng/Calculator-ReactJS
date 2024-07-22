import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import './Calculator.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false); 
  const [currentBracket, setCurrentBracket] = useState('(');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isResultDisplayed) {
      setInput(result);
    }
  }, [result, isResultDisplayed]);


  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        event.preventDefault();
        handleClick(key);
      } else if (key === 'Enter') {
        event.preventDefault();
        handleCalculate();
      } else if (key === 'Backspace') {
        event.preventDefault();
        handleBackspace();
      } else if (key === 'Escape') {
        event.preventDefault();
        handleClear();
      } else if (key === '(' || key === ')') {
        event.preventDefault();
        handleBracketClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input, result, isResultDisplayed]);

  useEffect(() => {
    const inputElement = inputRef.current;
    inputElement.style.fontSize = '7vh';

    inputElement.scrollLeft = inputElement.scrollWidth;
  }, [input]); 

  const handleClick = (value) => {
    setInput((prevInput) => {
      if (isResultDisplayed) {
        if (['+', '-', '*', '/'].includes(value)) {
          setIsResultDisplayed(false);
          return prevInput + value;
        } else {
          setIsResultDisplayed(false);
          return value;
        }
      } else {
        return prevInput + value;
      }
    });
  };

  const handleBracketClick = () => {
    handleClick(currentBracket);
    setCurrentBracket(currentBracket === '(' ? ')' : '(');
  }

  const handleClear = () => {
    setInput('');
    setResult('');
    setIsResultDisplayed(false); 
    setCurrentBracket('(')
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      let expression = input;
      expression = expression.replace(/(\d+)%/g, '($1/100)');
      const calculationResult = eval(expression);
      setResult(calculationResult.toString());
      setIsResultDisplayed(true);
    } catch (error) {
      setResult('Error');
      setIsResultDisplayed(true); 
    }
  };

  const handleDisplayChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleCalculate(); 
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
            <input 
              type="text" 
              value={input} 
              onChange={handleDisplayChange} 
              onKeyPress={handleKeyPress} 
              ref={inputRef}
            />
          </div>
          
          <div className="buttons">
            <button onClick={handleClear} className='clear-button'>C</button>
            <button onClick={handleBracketClick} className='functional-keys'>( )</button>
            <button onClick={() => handleClick('%')} className='functional-keys'>%</button>
            <button onClick={handleBackspace} className='backspace-button'>⌫</button>
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
            <button onClick={() => handleClick('*')} className='operator-button'>×</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('.')} className='functional-keys'>.</button>
            <button onClick={handleCalculate} className='equal-button'>=</button>
            <button onClick={() => handleClick('/')} className='operator-button'>÷</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Calculator;