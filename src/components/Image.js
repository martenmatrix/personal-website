import { useState } from 'react';
import '../styles/Image.css';

function Image({ src, className, alt, ...rest}) {
    const [hasLoaded, setHasLoaded] = useState(false);
    const classes = `image-with-loading ${hasLoaded ? '' : 'loading'} ${className}`;

    return <img src={src} alt={alt} className={classes} onLoad={() => setHasLoaded(true)} {...rest}/>
}

export default Image;