import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Axes from './pages/Axes';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/axes" element={<Axes />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
