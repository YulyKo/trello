import React, { Component } from 'react';
import './App.css';
import List from "./components/ListComponent/List";
import {connect} from "react-redux";

class App extends Component {
  render() {
    const { lists } = this.props;

    return (
      <div className="app">
        <header>
          <h1 className="text">Welcome to my test trello</h1>
        </header>
        <main className="flex">
          {lists.map(list => (
            <List title={list.title} cards={list.cards}/>
          ))}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
