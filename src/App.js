import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router className="App">
      <Home />
    </Router>
  );
}

export default App;
