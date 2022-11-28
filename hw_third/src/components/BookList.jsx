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
        <Row className="row g-4" xs={2} md={this.props.selected ? 2 : 4}>
          {this.props.books.slice(0, 16).map((book) => (
            <Col key={book.asin}>
              <SingleBook
                book={book}
                setSelected={this.props.setSelected}
                selected={this.props.selected === book.asin}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
