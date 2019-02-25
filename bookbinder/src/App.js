import React, { Component } from 'react';
import './App.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import BookCards from './BookCards';

class App extends Component {
  state = {
    query: "",
    books: {}
  }

  handleChange(query) {
    this.setState({
       query
    })
  }

  handleClick(){
     this.setState({
       query: ""
     })
  }

  handleSearch() {
    let {query} = this.state;
    const api = "https://www.googleapis.com/books/v1/volumes?q=intitle:"
    const url = api+query;
    console.log(url);
    fetch(url, {
        method: 'GET'
      })
      .then(res =>  res.json())
      .then((data) => {
        let books = data.items;
        console.log(books);
        this.setState({
          books
        })
        console.log(this.state.books);
      })

  }

  render() {
    const isVisible = this.state.query!=="";
    const {query} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>BOOK FINDER</h1>
        </header>
        <main>
          {/* ------ SearchBar ------ */}
          <InputGroup>
              <FormControl
              placeholder= "Search by book name"
              onChange={(e) => this.handleChange(e.target.value)}
              value= {this.state.query}
              />
              <InputGroup.Append>
              <Button
                  variant="light"
                  onClick ={() => this.handleClick()}
                  hidden = {!isVisible}
              >X</Button>
              <Button
                disabled = {!isVisible}
                onClick = {() => this.handleSearch()}
              >Search</Button>
              </InputGroup.Append>
          </InputGroup>
          <br></br>
          {/* ------ BookCards ------ */}
          <BookCards />
          <div>
            {query}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
