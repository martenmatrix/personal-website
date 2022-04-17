import { Route, Routes } from 'react-router-dom';
import ProjectOverview from './ProjectOverview';
import '../styles/Projects.css';



function Projects() {
    return (
        <Routes>
            <Route path=":projectId" element={<ProjectOverview />}/>
        </Routes>
    )
}

export default Projects;