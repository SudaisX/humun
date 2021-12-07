import './bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import About from './pages/About/About';
import HabibDebateUnion from './pages/About/HabibDebateUnion';
import History from './pages/About/History';
import PresidentNote from './pages/About/PresidentNote';

import ExecutiveCouncil from './pages/Team/ExecutiveCouncil';
import Secretariat from './pages/Team/Secretariat';
import Directorate from './pages/Team/Directorate';

import Committees from './pages/Committees/Committees';
import Committee from './pages/Committees/Committee';

import HowToRegister from './pages/Registration/HowToRegister';
import FeeStructure from './pages/Registration/FeeStructure';
import RulesOfProcedure from './pages/Registration/RulesOfProcedure';
import EquityPolicy from './pages/Registration/EquityPolicy';

import Contact from './pages/Contact';

function App() {
    const [active, setActive] = useState([true, false, false, false, false, false]);

    return (
        <>
            <Header active={active} />

            <Routes>
                <Route path='/about' element={<About setActive={setActive} />} />
                <Route path='/hdu' element={<HabibDebateUnion setActive={setActive} />} />
                <Route path='/history' element={<History setActive={setActive} />} />
                <Route path='/presidentnote' element={<PresidentNote setActive={setActive} />} />

                <Route
                    path='/executivecouncil'
                    element={<ExecutiveCouncil setActive={setActive} />}
                />
                <Route path='/secretariat' element={<Secretariat setActive={setActive} />} />
                <Route path='/directorate' element={<Directorate setActive={setActive} />} />

                <Route path='/committees' element={<Committees setActive={setActive} />} />
                <Route path='/committees/:id' element={<Committee setActive={setActive} />} />

                <Route path='/howtoregister' element={<HowToRegister setActive={setActive} />} />
                <Route path='/feestructure' element={<FeeStructure setActive={setActive} />} />
                <Route
                    path='/rulesofprocedure'
                    element={<RulesOfProcedure setActive={setActive} />}
                />
                <Route path='/equitypolicy' element={<EquityPolicy setActive={setActive} />} />

                <Route path='/contact' element={<Contact setActive={setActive} />} />

                <Route path='/' element={<Home setActive={setActive} />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
