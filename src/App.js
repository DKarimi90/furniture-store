// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components /About';
import Contact from './components /Contact';
import FurnitureDetails from './components /FurnitureDetails';
import NavBar from './components /NavBar';
import Footer from './Footer';
import Home from './views/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <h6>Welcome to Day Vees Furniture Store</h6>
      <NavBar />
      <div className='nav-items'>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/furniture/:id" element = {<FurnitureDetails />}/>
        </Routes>
        <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;
