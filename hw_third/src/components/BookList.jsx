import { Card } from "react-bootstrap";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import books from "./fantasy.json";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Row className="row g-4" xs={1} md={4}>
          {this.props.books.map((book) => (
           <SingleBook book={book}></SingleBook>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;

