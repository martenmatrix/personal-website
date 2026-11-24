import LinkPage from './LinkPage';
import projects from '../data/projects';

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

    const projectLinks = sortedProjects.map(({ id, title }) => ({
        href: id,
        title,
    }));

    return <LinkPage title="Projects" links={projectLinks} />;
}

AllProjects.defaultProps = {
    showProjects: projects
}

export default AllProjects;
