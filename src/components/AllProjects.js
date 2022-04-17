import Image from './Image';
import projects from '../data/projects';
import '../styles/AllProjects.css';

function ProjectContainer({ project }) {
    	return (
            <div className="project-container">
                <Image src={project.titleImage} />
                <div className="title-description-wrapper">
                    <div className="title">{project.title}</div>
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
        <ul className="all-projects">
            {sortedProjects.map((project) => (
                <li>
                    <ProjectContainer key={project.id} project={project} />
                </li>
                )
            )}
        </ul>
    )
}

export default AllProjects;