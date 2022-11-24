import WarningSign from './components/WarningSign';
import './App.css';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import 'bootstrap/dist/css/bootstrap.min.css';  
import books from "./components/fantasy.json"
import CommentArea from './components/CommentArea';

function App() {
  return (
    <div>
      <WarningSign title='This is an alert'></WarningSign>
      <MyBadge class='badge' title='badge'></MyBadge>
      <hr></hr>
      <BookList class="books" books={books}></BookList>
    </div>
  );
}

export default App;
