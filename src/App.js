import React from 'react';
import './App.css';
import AddingList from "./containers/AddingList";
import Board from "./components/BoardComponent/Board";

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="text">Welcome to my test trello</h1>
      </header>
      <main>
        <Board/>
        <AddingList/>
      </main>
    </div>
  );
}

export default App;
