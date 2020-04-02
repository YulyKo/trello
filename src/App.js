import React from 'react';
import './App.css';
import Columns from "./components/ColumnsComponent/Columns";

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="text">Welcome to my test trello</h1>
      </header>
      <Columns/>
    </div>
  );
}

export default App;
