import './styles/App.css';
import Homepage from './components/Homepage';
import AboutMe from './components/Homepage';
import Projects from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />}/>
                    <Route path="about" element={<AboutMe />}/>
                    <Route path="projects" element={<Projects />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
