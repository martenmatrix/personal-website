import LinkPage from './LinkPage';
import links from '../data/links';

function Homepage() {
    return <LinkPage title="Marten Bitterling" links={links} />;
}

export default Homepage;
