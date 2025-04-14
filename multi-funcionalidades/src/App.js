
import './App.css';
import React, { useState } from 'react';
import Header from './header';
import ToDoList from './To-Do-List';
import Contador from './Contador';
import Calculadora from './Calculadora';
import Jogo from './Jogo'
import CEP from './CEP'
function App() {
  const [selectedApp, setSelectedApp] = useState('todo'); // Estado para controlar qual app é exibido

  // Função para alternar entre as aplicações
  const handleSelectApp = (app) => {
    setSelectedApp(app);
  };

  return (
    <div>
      <Header onSelectApp={handleSelectApp} /> {/* Passando a função para o Header */}

      <div className="content">
        {/* Renderiza o componente correspondente ao aplicativo selecionado */}
        {selectedApp === 'todo' && <ToDoList />}
        {selectedApp === 'counter' && <Contador />}
        {selectedApp === 'Calculadora' && <Calculadora />}
        {selectedApp === 'ticTacToe' && <Jogo />}
        {selectedApp === 'cep' && <CEP />}
      </div>
    </div>
  );
}

export default App;
