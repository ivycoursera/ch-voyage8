import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './BookCards.css';


const BookCards = (props) => {


  let books = props.books;
  if (Object.keys(books).length === 0){
    return (
      <div>{props.message}</div>
    );
  } else {
    return (
      <div className="book-cards">
        {
          books.filter((book) => book.volumeInfo.imageLinks).map((book) =>(
            <Card
              className = "book-card"
              key={book.id}
              // style = {{width: '45%'}}
            >
              <Card.Img
                className="book-card-image"
                variant="top"
                src={book.volumeInfo.imageLinks.thumbnail}
              />
              <Card.Body
                className="book-card-body">
                <Card.Title
                  className = "card-title"
                  >{book.volumeInfo.title}</Card.Title>
                <Card.Text
                  className="card-text"
                  >By:  {book.volumeInfo.authors}</Card.Text>
                <Card.Text
                  className="card-text"
                  >Published By:  {book.volumeInfo.publisher}</Card.Text>
                <Button
                  href={book.volumeInfo.canonicalVolumeLink}
                  target="_blank"
                  variant="info"
                  >Details</Button>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    );
  }
}

export default BookCards;