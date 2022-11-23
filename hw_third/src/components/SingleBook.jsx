import { Card } from "react-bootstrap";
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import books from "./fantasy.json"

class SingleBook extends React.Component {
    render() {
        return (
            <>
             <Row xs={1} md={4} className="g-4">
                {this.props.books.map((book) => (
                  <Col>
                    <Card key={book.asin} style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                ))}
                </Row>
            </>
            
        );
        
    }
}

export default SingleBook