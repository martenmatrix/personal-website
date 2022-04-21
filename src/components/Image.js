import { useState } from 'react';
import '../styles/Image.css';

function Image({ src, alt, className, loading = 'auto', ...rest}) {
    const [hasLoaded, setHasLoaded] = useState(false);
    const classes = `${hasLoaded ? '' : 'loading '}loading-image${className ? ' ' + className : ''}`;

    return (
        <div className={classes} {...rest}>
            <div className="loading-animation" aria-hidden="true"></div>
            <img src={src} alt={alt} loading={loading} onLoad={() => setHasLoaded(true)}/>
        </div>
    );
}

export default Image;