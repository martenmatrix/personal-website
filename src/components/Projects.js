import { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import LinkDesign from './LinkDesign';
import Markdown from './GitHubMarkdown';
import projects from '../data/projects';
import links from '../data/links';
import '../styles/Projects.css';

function LoadingCircle() {
    return <div className="loading-circle"></div>
}

function ProjectImage({ project }) {
    const [hasLoaded, setHasLoaded] = useState(false);

    return (
        <div className="title-image-section">
            
            {
            project &&
            <a className="title-image" href={project.titleImage} target="_blank" rel="noreferrer">
                <img alt="Website being used" src={project.titleImage} className={hasLoaded ? null : 'loading'} onLoad={() => setHasLoaded(true)}/>
            </a>
            }
            <p className="click-info">Click the image to enlarge</p>
        </div>
    )
}

function ProjectOverview() {
    const params = useParams();
    const [project, setProject] = useState();
    const [readMe, setReadMe] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const getProject = (id) => {
            const index = projects.findIndex((project) => project.id === id);
            const project = projects[index];
            setProject(project);
        }

        getProject(params.projectId);

    }, [params.projectId]);

    useEffect(() => {
        const getReadMe = async () => {
            try {
                if (!project) {
                    setReadMe();
                    return;
                }
                const response = await fetch(project.readme, {
                    method: 'GET',
                });
                const readme = await response.text();
                setReadMe(readme);
            } catch (e) {
                console.error('Failed to fetch README from GitHub: ' + e);
                setError(e);
            }
        }

        getReadMe();
        
    }, [project]);

    return (
        <div className="project-overview">
            <ProjectImage project={project}/>
            {
            readMe ?
            <Markdown>{readMe}</Markdown> :
            error ? null : <LoadingCircle />
            }
            {
            error &&
            <p className="click-info">There was an error fetching a file from GitHub. Try <span className="link" onClick={() => window.location.reload()}>refreshing the page</span>.</p>
            }
            {project && (project.hasOwnProperty('git')) && <LinkDesign className="link-to-repo" target="_blank" to={project.git}>Go to projects repository</LinkDesign>}
        </div>
    )
}

function Projects() {
    return (
        <Routes>
            <Route path=":projectId" element={<ProjectOverview />}/>
        </Routes>
    )
}

export default Projects;