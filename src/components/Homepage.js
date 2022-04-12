import { Link } from 'react-router-dom';
import arrowUpRight from '../img/arrow-up-right.svg';
import './SpotifyCurrentlyPlaying';
import '../styles/Homepage.css';

function Links() {
    return (
        <nav>
            <ul className="links">
                <li><a href="mailto:privacy.shadier_0b@icloud.com?body=⚠️ I hide my real mail address to protect me from spammers. Your mail will get forwarded to my real account and I will answer with my mail address unhidden." rel="noreferrer">contact</a></li>
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