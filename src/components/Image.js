import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';
import '../styles/Image.css';

function Image({ src, alt, className, onLoad, loading, ...rest}) {
    const [hasLoaded, setHasLoaded] = useState(false);
    const classes = `${hasLoaded ? '' : 'loading '}loading-image${className ? ' ' + className : ''}`;

    function onImageLoad() {
        setHasLoaded(true);
        onLoad && onLoad();
    }

    return (
        <div className={classes} {...rest}>
            <div className="loading-animation" aria-hidden="true"></div>
            {loading === 'lazy' ?
            <LazyLoadImage src={src} alt={alt} onLoad={onImageLoad} /> :
            <img src={src} alt={alt} onLoad={onImageLoad} />
            }
        </div>
    );
}

export default Image;