import { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import projects from '../data/projects';
import ReactMarkdown from 'react-markdown';

function ProjectOverview() {
    const params = useParams();
    const [project, setProject] = useState();
    const [readMe, setReadMe] = useState();

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
            if (!project) {
                setReadMe();
                return;
            }
            const response = await fetch(project.readme, {
                method: 'GET',
            });
            const readme = await response.text();
            setReadMe(readme);
        }

        getReadMe();
        
    }, [project]);

    return (
        <div className="project-overview">
            <ReactMarkdown>{readMe}</ReactMarkdown>
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