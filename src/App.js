import NavBar from './components/NavBar';
import Avatar from './components/Avatar';
import Bio from './components/Bio';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar fixed="top" />
      <Avatar />
      <Bio />
    </div>
  );
}

export default App;
