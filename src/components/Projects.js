import { Route, Routes, useParams } from 'react-router-dom';

function ProjectOverview() {
    const params = useParams();

    return (
        <div className="project-overview">
            {params.projectId}
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