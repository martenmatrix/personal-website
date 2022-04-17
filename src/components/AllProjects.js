import projects from '../data/projects';
import '../styles/AllProjects.css';

function ProjectContainer({ project }) {
    	return null;
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
        <div className="all-projects">
            {sortedProjects.map((project) => <ProjectContainer key={project.id} project={project} />)}
        </div>
    )
}

export default AllProjects;