import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>BOOK FINDER</h1>
        </header>
        <main>
          <div className="search-bar">
            <form>
              <input type='text' className="search-input" name="books" />
              <button className="hide">X</button>
              <input type="submit" className="search-submit" value="Search"/>
            </form>
          </div>
          <div className="book-list">
              <p>Nothing to show yet. Try searching for a book.</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
