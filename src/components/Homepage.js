import LinkDesign from './LinkDesign';
import links from '../data/links'
import '../styles/Homepage.css';

function Links() {

    const getTargetValue = (linkObject) => linkObject.newTab ? '_blank' : '_self';

    return (
        <nav>
            <ul className="links">
                {links.map((linkObject, index) => (
                    <li key={index}>
                        <LinkDesign to={linkObject.href} target={getTargetValue(linkObject)}>{linkObject.title}</LinkDesign>
                    </li>
                ))}
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