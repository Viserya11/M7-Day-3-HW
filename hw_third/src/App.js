import WarningSign from './components/WarningSign';
import './App.css';
import MyBadge from './components/MyBadge';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
  return (
    <div>
      <WarningSign title='This is an alert'></WarningSign>
      <MyBadge class='badge' title='badge'></MyBadge>
    </div>
  );
}

export default App;
