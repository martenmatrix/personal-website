import { Link } from 'react-router-dom';
import GreyUnderlinedText from './GreyUnderlinedText';
import arrowUpRight from '../img/arrow-up-right.svg';
import '../styles/LinkDesign.css';

function LinkDesign({ to, children, className, ...rest }) {

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

    const newClassName = className ? `link-design ${className}` : 'link-design';

    if (unableToParseByReactRouter(to)) {
        return (
            <a href={to} className={newClassName} {...rest} rel="noreferrer">
                <GreyUnderlinedText>
                    {children}{isAbsoluteLink(to) && <img src={arrowUpRight} alt="arrow up right" />}
                </GreyUnderlinedText>
            </a>
            );
    } else {
        return (
            <Link to={to} className={newClassName} {...rest}>
                <GreyUnderlinedText>
                    {children}
                </GreyUnderlinedText>
            </Link>);
    }
}

export default LinkDesign;
