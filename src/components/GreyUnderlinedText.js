import '../styles/GreyUnderlinedText.css';

function GreyUnderlinedText({ activateOnHover = true, className, children, ...rest }) {
    const classes = `grey-underlined-text${className ? ' ' + className : ''}${activateOnHover ? ' activate-hover' : ''}`
    
    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    )
}

export default GreyUnderlinedText;