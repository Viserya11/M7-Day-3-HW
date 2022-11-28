import WarningSign from './components/WarningSign';
import './App.css';
import { Col } from 'react-bootstrap';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import 'bootstrap/dist/css/bootstrap.min.css';  
import books from "./components/fantasy.json"
import CommentArea from './components/CommentArea';
import React from 'react';

class App extends React.Component {
  state = {
    selected: null,
};

setSelected = (asin) => {
    this.setState({
        selected: asin,
    });
};
  render() {
    
  return (
    
    <div>
      <WarningSign title='This is an alert'></WarningSign>
      <MyBadge class='badge' title='badge'></MyBadge>
      <hr></hr>
      <BookList class="books"  books={books} setSelected={this.setSelected}></BookList>
                        <Col>
                        <CommentArea book={this.state.selected} />
                    </Col>
    </div>
  );
}
}

export default App;
