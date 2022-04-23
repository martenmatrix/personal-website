import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import LinkDesign from './LinkDesign';
import Markdown from './GitHubMarkdown';
import Image from './Image';
import projects from '../data/projects';
import '../styles/ProjectOverview.css';

function LoadingCircle() {
    return (
        <div className="loading-circle-wrapper">
            <div className="loading-circle"></div>
        </div>
    )
}

function ProjectImage({ project }) {
    const projectImageLink = project ? project.overviewImage : null;

    return (
        <div className="title-image-section">
            <a className="title-image" href={projectImageLink} target="_blank" rel="noreferrer">
                <Image src={projectImageLink} alt={'Website being used'} />
            </a>
            <p className="click-info">Click the image to enlarge</p>
        </div>
    )
}

function ViewRepository({ project }) {
    const hasGitLink = project && project.hasOwnProperty('git');

    if (hasGitLink) {
        return (<div className="wrapper">
                    <LinkDesign className="link-to-repo" target="_blank" to={project.git}>view repository</LinkDesign>
                </div>)
    }

    return null;
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

    if (!project) return <p>This project does not exist</p>;

    return (
        <div className="project-overview">
            <Header title={project.title}/>
            <ProjectImage project={project}/>
            <ViewRepository project={project}/>
            {
            readMe ?
            <Markdown>{readMe}</Markdown> :
            error ? null : <LoadingCircle />
            }
            {
            error &&
            <p className="click-info">There was an error fetching a file from GitHub. Try <span className="link" onClick={() => window.location.reload()}>refreshing the page</span>.</p>
            }
        </div>
    )
    }

export default ProjectOverview;