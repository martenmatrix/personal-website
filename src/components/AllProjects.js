import Image from './Image';
import projects from '../data/projects';
import '../styles/AllProjects.css';
import { Link } from 'react-router-dom';

function ProjectContainer({ project }) {
    	return (
            <div className="project-container">
                <Image className="image" src={project.titleImage} />
                <div className="title-description-wrapper">
                    <h2 className="title">{project.title}</h2>
                    <div className="description">{project.description}</div>
                </div>
            </div>
        );
}

function AllProjects() {
    const unhiddenProjects = projects.filter((project) => !project.hide);
    const sortedProjects = unhiddenProjects.sort((projectA, projectB) => {
        const posA = projectA.order;
        const posB = projectB.order;

        if (posA && posB) {
            if (posA > posB) {
                return -1;
            } else if (posB > posA) {
                return 1;
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
            <h1>Projects</h1>
            <ul className="all-projects">
                {sortedProjects.map((project) => (
                    <li>
                        <Link to={project.id}>
                            <ProjectContainer key={project.id} project={project} />
                        </Link>
                    </li>
                    )
                )}
            </ul>
        </>
    )
}

export default AllProjects;