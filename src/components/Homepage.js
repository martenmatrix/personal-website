import LinkDesign from './LinkDesign';
import '../styles/Homepage.scss';

function Links() {
    return (
        <nav>
            <ul className="links">
                <li><LinkDesign to="mailto:privacy.shadier_0b@icloud.com?body=⚠️ I hide my real mail address to protect me from spammers. Your mail will get forwarded to my real account and I will answer with my mail address unhidden.">contact</LinkDesign></li>
                <li><LinkDesign to="projects">projects</LinkDesign></li>
                <li><LinkDesign to="https://github.com/martenmatrix" target="_blank">github</LinkDesign></li>
                <li><LinkDesign to="https://stackoverflow.com/users/14231863/marten" target="_blank">stack overflow</LinkDesign></li>
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