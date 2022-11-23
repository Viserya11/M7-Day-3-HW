import WarningSign from './components/WarningSign';
import './App.css';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import 'bootstrap/dist/css/bootstrap.min.css';  
import books from "./components/fantasy.json"

function App() {
  return (
    <div>
      <WarningSign title='This is an alert'></WarningSign>
      <MyBadge class='badge' title='badge'></MyBadge>
      <hr></hr>
      <SingleBook class="books" books={books}></SingleBook>
    </div>
  );
}

export default App;
