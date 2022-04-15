import { Link } from 'react-router-dom';
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

    if (isAbsoluteLink) {
        return <a href={a} className={newClassName} {...rest}>{children}</a>;
    } else {
        return <Link to={a} className={newClassName} {...rest}>{children}</Link>;
    }
}

export default LinkDesign;
