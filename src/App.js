import React from 'react';
import './App.css';
import ThreeIdeasButton from './components/button.js';

function App() { 

  return (
    <div className="App">
      <div className="App-body">
        <h3>Three random date ideas:</h3>
        <ThreeIdeasButton />
      </div>
    </div>
  );
}

export default App;