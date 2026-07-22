import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App () {
  return (
    <HashRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    <Footer />
    </HashRouter>
  );
}

export default App;