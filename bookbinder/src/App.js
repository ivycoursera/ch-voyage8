import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import BookCards from './BookCards';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>BOOK FINDER</h1>
        </header>
        <main>
          <SearchBar />
          <br></br>
          <BookCards />
        </main>
      </div>
    );
  }
}

export default App;
