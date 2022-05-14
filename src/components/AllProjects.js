import Image from './Image';
import GreyUnderlinedText from './GreyUnderlinedText';
import Header from './Header';
import projects from '../data/projects';
import '../styles/AllProjects.css';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

function ProjectContainer({ project }) {
        const [objectFit, setObjectFit] = useState('cover');

        const projectContainer = useRef(null);

        function getImageHeightAndWidth() {
            const imageElement = projectContainer.current.querySelector('img');
            const { naturalWidth, naturalHeight } = imageElement;

            return {
                naturalWidth, 
                naturalHeight
            }
        }

        function onImageLoad() {
            const { naturalWidth, naturalHeight } = getImageHeightAndWidth();
            const aspectRatioScore = naturalWidth / naturalHeight;
            
            if (aspectRatioScore > 3) {
                setObjectFit('scale-down');
            };
        }
 
    	return (
            <div className="project-container" ref={projectContainer}>
                <span className="top border"></span>
                <span className="right border"></span>
                <span className="bottom border"></span>
                <span className="left border"></span>
                <Image onLoad={onImageLoad} style={{'objectFit': objectFit}} className="image" loading="lazy" src={project.titleImage} alt={project.title + ' being used'}/>
                <div className="title-description-wrapper">
                    <h2 className="title">
                        <GreyUnderlinedText>
                            {project.title}
                        </GreyUnderlinedText>
                    </h2>
                    <div className="description">{project.description}</div>
                </div>
            </div>
        );
}

function AllProjects({ showProjects }) {
    const unhiddenProjects = showProjects.filter((project) => !project.hide);
    const sortedProjects = unhiddenProjects.sort((projectA, projectB) => {
        const posA = projectA.order;
        const posB = projectB.order;

        if (posA && posB) {
            if (posA > posB) {
                return 1;
            } else if (posB > posA) {
                return -1;
            }
        }

        if (posA && !posB) {
            return -1;
        }

        if (!posA && posB) {
            return 1;
        }

        return 0;
    });

    return (
        <>
            <Header title="Projects" />
            <ul className="all-projects">
                {sortedProjects.map((project) => (
                    <li key={project.id}>
                        <Link to={project.id}>
                            <ProjectContainer project={project} />
                        </Link>
                    </li>
                    )
                )}
            </ul>
        </>
    )
}

AllProjects.defaultProps = {
    showProjects: projects
}

export default AllProjects;