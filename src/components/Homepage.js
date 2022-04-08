import { Link } from 'react-router-dom';
import './SpotifyCurrentlyPlaying';
import '../styles/Homepage.css';

function Links() {
    return (
        <nav>
            <ul className="links">
                <li><Link to="about">about me</Link></li>
                <li><Link to="projects">projects</Link></li>
                <li><a href="https://github.com/martenmatrix" target="_blank" rel="noreferrer">github</a></li>
                <li><a href="https://stackoverflow.com/users/14231863/marten" target="_blank" rel="noreferrer">stack overflow</a></li>
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