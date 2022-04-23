import GreyUnderlinedText from "./GreyUnderlinedText";
import '../styles/Header.css';

function Header({ title, ...rest }) {
    return (
        <h1>
            <GreyUnderlinedText activateOnHover={false}>
                {title}
            </GreyUnderlinedText>
        </h1>
    ) 
}

export default Header;