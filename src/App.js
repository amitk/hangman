import React from 'react';
import './App.css';
import Word from './components/Word'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HANGMAN</h1>
        <Word
        />
      </header>
    </div>
  );
}

export default App;
