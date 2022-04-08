import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

function Links() {
    return (
        <nav>
            <ul className="links">
                <li><Link to="about">about me</Link></li>
                <li><Link to="projects">projects</Link></li>
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