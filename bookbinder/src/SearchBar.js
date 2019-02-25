import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class SearchBar extends Component {
    state = {
      query: ""
    }

    handleChange(query) {
     this.setState({
        query: query
      })
    }

    handleClick(){
      this.setState({
        query: ""
      })
    }

    render() {
      const isVisible = this.state.query!=="";
      return (
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
            <Button disabled>Search</Button>
            </InputGroup.Append>
        </InputGroup>
      );
    }
  }

  export default SearchBar;