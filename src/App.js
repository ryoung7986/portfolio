import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar';
import Avatar from './components/about/Avatar';
import Bio from './components/about/Bio';
import ProjectGrid from './components/projects/ProjectGrid';
import Sidebar from './components/sidebar';
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
