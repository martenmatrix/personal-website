import './styles/App.css';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function BlackToWhite() {
    return <div className="black-to-white" aria-hidden="true"></div>
}

function App() {
    return (
        <>
            <BlackToWhite />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="about" element={<AboutMe />}/>
                    <Route path="projects/*" element={<Projects />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
