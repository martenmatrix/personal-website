import Header from './Header';
import LinkDesign from './LinkDesign';
import '../styles/LinkPage.css';

function LinkPage({ title, links }) {
    return (
        <main className="link-page">
            <Header title={title} />
            <nav aria-label={title}>
                <ul className="links">
                    {links.map(({ href, title, newTab }, index) => (
                        <li key={href} style={{ animationDelay: `${200 * index}ms` }}>
                            <LinkDesign to={href} target={newTab ? '_blank' : '_self'}>
                                {title}
                            </LinkDesign>
                        </li>
                    ))}
                </ul>
            </nav>
        </main>
    );
}

export default LinkPage;
