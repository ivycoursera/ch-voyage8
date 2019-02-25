import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>BOOK FINDER</h1>
        </header>
        <SearchBar />
      </div>
    );
  }
}

export default App;
