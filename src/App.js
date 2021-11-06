import './bootstrap.min.css';
import './App.css';
import { useState } from 'react';
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
    const [active, setActive] = useState([true, false, false, false, false]);

    return (
        <>
            <Header active={active} />

            <Routes>
                <Route path='/' element={<Home setActive={setActive} />} />
                <Route path='/about' element={<About setActive={setActive} />} />
                <Route path='/committees' element={<Committees setActive={setActive} />} />
                <Route path='/committees/:id' element={<Committee setActive={setActive} />} />
                <Route path='/contact' element={<Contact setActive={setActive} />} />
                <Route path='/register' element={<Register setActive={setActive} />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
