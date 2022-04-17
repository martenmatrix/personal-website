import { useState } from 'react';

function ProjectImage({ project }) {
    const [hasLoaded, setHasLoaded] = useState(false);
    const projectImageLink = project ? project.titleImage : null;

    return (
        <div className="title-image-section">
            <a className="title-image" href={projectImageLink} target="_blank" rel="noreferrer">
                <img alt="Website being used" src={projectImageLink} className={hasLoaded ? null : 'loading'} onLoad={() => setHasLoaded(true)}/>
            </a>
            <p className="click-info">Click the image to enlarge</p>
        </div>
    )
}

export default ProjectImage;