import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" exact Component={Home}></Route>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
