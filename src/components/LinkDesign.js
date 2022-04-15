import { Link } from 'react-router-dom';
import arrowUpRight from '../img/arrow-up-right.svg';
import '../styles/Link.css';

function LinkDesign({ a, children, className, ...rest }) {

    const isAbsoluteLink = (link) => {
        const matches = link.match(/^(https?)/gi);
        const hasMatch = !!matches;
        return hasMatch;
    }

    const unableToParseByReactRouter = (link) => {
        const matches = link.match(/^(https?|mailto|#)/gi);
        const hasMatch = !!matches;
        return hasMatch;
    }

    const newClassName = `link-design ${className}`;

    if (unableToParseByReactRouter(a)) {
        return <a href={a} className={newClassName} {...rest} rel="noreferrer">{children}{isAbsoluteLink(a) && <img src={arrowUpRight} alt="arrow up right" />}</a>;
    } else {
        return <Link to={a} className={newClassName} {...rest}>{children}</Link>;
    }
}

export default LinkDesign;
