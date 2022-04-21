import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';
import '../styles/Image.css';

function Image({ src, alt, className, onLoad, ...rest}) {
    const [hasLoaded, setHasLoaded] = useState(false);
    const classes = `${hasLoaded ? '' : 'loading '}loading-image${className ? ' ' + className : ''}`;

    return (
        <div className={classes} {...rest}>
            <div className="loading-animation" aria-hidden="true"></div>
            <LazyLoadImage src={src} alt={alt} onLoad={() => {
                setHasLoaded(true);
                onLoad && onLoad();
            }
        }/>
        </div>
    );
}

export default Image;