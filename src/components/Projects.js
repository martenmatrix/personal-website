import { Route, Routes } from 'react-router-dom';
import ProjectOverview from './ProjectOverview';
import AllProjects from './AllProjects';


function Projects() {
    return (
        <Routes>
            <Route index element={<AllProjects />}/>
            <Route path=":projectId" element={<ProjectOverview />}/>
        </Routes>
    )
}

export default Projects;