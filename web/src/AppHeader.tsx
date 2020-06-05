import React, { useState } from 'react';
import './App.css';

import Header from './Header';

// JSX: Sintaxe de XML dentro do JavaScript

function App() {
  const [counter, setCounter] = useState(0); // [valor do estado, função pra atualizar o valor]

  function handleButtonClick() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div>
      <Header title={`Contador: ${counter}`} />

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
