import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class BookCards extends Component {

    render() {
      return (
        <Card>
            <Card.Img />
            <Card.Body>
                <Card.Title>Book Name</Card.Title>
                <Card.Text>A summary here</Card.Text>
                <Button>Details</Button>
            </Card.Body>
        </Card>
      );
    }
  }

  export default BookCards;