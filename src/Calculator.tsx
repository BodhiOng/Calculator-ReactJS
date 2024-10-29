import React, { useEffect, useState, useRef, ChangeEvent } from 'react';
import Header from './Header';
import './Calculator.css'; 

const Calculator = () => {
  const [input, setInput] = useState<string>(''); // Holds the current input from user
  const [result, setResult] = useState<string>(''); // Holds the result of the calculation
  const [isResultDisplayed, setIsResultDisplayed] = useState<boolean>(false);  // Indicates if the result is currently displayed
  const [currentBracket, setCurrentBracket] = useState<string>('('); // Keeps track of which bracket to use next
  const inputRef = useRef<HTMLInputElement | null>(null); // Reference to the input element

  useEffect(() => {
    // Update input when result is displayed
    if (isResultDisplayed) {
      setInput(result);
    }
  }, [result, isResultDisplayed]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      // Handle different key inputs
      if (!isNaN(Number(key)) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
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
    // Adjust font size and scroll input element
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.style.fontSize = '7vh'; // Font size adjustment as needed
  
      // Scroll to the end of the input
      inputElement.scrollLeft = inputElement.scrollWidth;
    }
  }, [input]); 

  // Handle button clicks
  const handleClick = (value: string) => {
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

  // Handle bracket toggle  
  const handleBracketClick = () => {
    handleClick(currentBracket);
    setCurrentBracket(currentBracket === '(' ? ')' : '(');
  }

  // Clear the calculator  
  const handleClear = () => {
    setInput('');
    setResult('');
    setIsResultDisplayed(false); 
    setCurrentBracket('(')
  };

  // Handle backspace key
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  // Calculate the result of the input expression
  const handleCalculate = () => {
    try {
      let expression = input;
      expression = expression.replace(/(\d+)%/g, '($1/100)');
      const calculationResult = eval(expression); // Evaluate the expression
      setResult(calculationResult.toString());
      setIsResultDisplayed(true);
    } catch (error) {
      setResult('Error');
      setIsResultDisplayed(true); 

      // Clear result after a delay
      setTimeout(() => {
        setResult('');
        setIsResultDisplayed(false);
        setInput('');
      }, 5000);
    }
  };

  // Update input from the display bar (keyboard typing)
  const handleDisplayChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  // Handle key press from Enter key
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
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