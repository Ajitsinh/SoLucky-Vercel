import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Team from './components/Team';
import Shop from './components/Shop';
import Magazine from './components/Magazine';
import Events from './components/Events';
import Media from './components/Media';
import Collabs from './components/Collabs';
import './components/Navbar.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/magazine" element={<Magazine/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/media" element={<Media/>} />
          <Route path="/collabs" element={<Collabs/>} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
