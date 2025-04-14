import React from 'react';

function Header({ onSelectApp }) {
  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => onSelectApp('todo')}>To-Do List</li>
          <li onClick={() => onSelectApp('counter')}>Contador de Cliques</li>
          <li onClick={() => onSelectApp('Calculadora')}>Calculadora</li>
          <li onClick={() => onSelectApp('ticTacToe')}>Jogo da Velha</li>
          <li onClick={() => onSelectApp('cep')}>Buscador de CEP</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;