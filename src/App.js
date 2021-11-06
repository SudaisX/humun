import './bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Committees from './pages/Committees';
import Committee from './pages/Committee';
import Contact from './pages/Contact';
import Register from './pages/Register';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/committees' element={<Committees />} />
                <Route path='/committees/:id' element={<Committee />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/register' element={<Register />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
