import '../styles/GreyUnderlinedText.css';

function GreyUnderlinedText({activateOnHover, children, ...rest}) {
    return (
        <div className="grey-underlined-text">
            {children}
        </div>
    )
}

export default GreyUnderlinedText;