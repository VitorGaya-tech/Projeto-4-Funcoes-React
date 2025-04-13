import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h2>Contador de Cliques</h2>
      <p>Você clicou {count} vezes!</p>
      <button onClick={increment}>Clique aqui</button>
    </div>
  );
}

export default ClickCounter;