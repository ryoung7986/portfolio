import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import Avatar from './components/About/Avatar';
import Bio from './components/About/Bio';
import ProjectGrid from './components/Projects/ProjectGrid';
import Sidebar from './components/Sidebar';
import Home from './pages';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router className="App">
      <Home />
      {/* <Sidebar />
      <NavBar fixed="top" /> */}
      {/* <Avatar />
      <Bio />
      <ProjectGrid /> */}
    </Router>
  );
}

export default App;
