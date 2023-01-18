import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProject, updateProject } from '../services/projects.js'

export default function CreateProject() {
    const [project, setProject] = useState ({
        _id: "",
        projectId: "",
        title: "",
        benefits: "",
        description: "",
        destinations: [{}],
        startYear: "",
        startMonth: "",
        endYear: "",
        endMonth: ""
    });
    
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetchProject()
    }, [])

    async function fetchProject() {
        let oneProject = await getProject(id);
        setProject(oneProject);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProject(id, project);
        navigate(`/projects/${project.projectId}`, {replace: true})
    }

    const handleChange = async (e) => {
        const {value, name} = e.target;

        setProject((prev) => ({
            ...prev,
            [name]:value
        }))
    }

    return (
        <div>
            <h1>Edit Existing Project</h1>
            <form className="create-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Project ID"
                    name="projectId"
                    value={project.projectId}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={project.title}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Benefits"
                    name="benefits"
                    value={project.benefits}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={project.description}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Destinations"
                    name="destinations"
                    value={project.destinations.description}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Start year"
                    name="startYear"
                    value={project.startYear}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Start month"
                    name="startMonth"
                    value={project.startMonth}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="End year"
                    name="endYear"
                    value={project.endYear}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="End month"
                    name="endMonth"
                    value={project.endMonth}
                    onChange={handleChange}
                />
                <button>Edit this project</button>
            </form>
        </div>
    )
}
