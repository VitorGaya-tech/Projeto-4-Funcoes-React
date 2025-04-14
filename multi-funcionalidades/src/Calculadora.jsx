import React, { useState } from 'react';


const Calculadora = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  return (
    <div className="calc-container">
      <div className="calc-display">{input || '0'}</div>
      <div className="calc-buttons">
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === '=' ? handleResult() : handleClick(btn))}
            className={btn === '=' ? 'equal' : ''}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear} className="clear">C</button>
      </div>
    </div>
  );
};

export default Calculadora;