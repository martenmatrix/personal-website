import { Link } from 'react-router-dom';
import arrowUpRight from '../img/arrow-up-right.svg';
import './SpotifyCurrentlyPlaying';
import '../styles/Homepage.css';

function Links() {
    return (
        <nav>
            <ul className="links">
                <li><Link to="about">about me</Link></li>
                <li><Link to="projects">projects</Link></li>
                <li><a href="https://github.com/martenmatrix" target="_blank" rel="noreferrer">github<img src={arrowUpRight} alt="arrow up right" /></a></li>
                <li><a href="https://stackoverflow.com/users/14231863/marten" target="_blank" rel="noreferrer">stack overflow<img src={arrowUpRight} alt="arrow up right" /></a></li>
            </ul>
        </nav>
    )
}

function Homepage() {
    return (
        <div className="homepage">
            <Links />
        </div>
    );
}

export default Homepage;