import '../styles/GreyUnderlinedText.css';

function GreyUnderlinedText({ activateOnHover = true, className, children, ...rest }) {
    const classes = `grey-underlined-text${className ? ' ' + className : ''}${activateOnHover ? ' activate-hover' : ''}`
    
    return (
        <span className={classes} {...rest}>
            {children}
        </span>
    )
}

export default GreyUnderlinedText;
