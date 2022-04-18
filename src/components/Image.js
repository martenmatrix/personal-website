import { useState } from 'react';
import '../styles/Image.css';

function Image({ src, alt, className, ...rest}) {
    const [hasLoaded, setHasLoaded] = useState(false);
    const classes = `loading-image ${hasLoaded ? '' : 'loading'} ${className}`;

    return (
        <div className={classes} {...rest}>
            <div className="loading-animation" aria-hidden="true"></div>
            <img src={src} alt={alt} onLoad={() => setHasLoaded(true)}/>
        </div>
    );
}

export default Image;