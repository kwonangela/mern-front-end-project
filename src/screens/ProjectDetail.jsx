import { useState, useEffect} from 'react'
import { deleteProject } from '../services/projects.js';
import { Link, useParams, useNavigate} from "react-router-dom";

export default function ProjectDetail() {
    const [project, setProject] = useState({});
    
    let { id } = useParams();
    let navigate = useNavigate();


    useEffect(() => {
        fetchProject()
    }, [])

    async function fetchProject() {
        fetch(`https://nasaprojectapi-production.up.railway.app/api/projects/${id}`)
        .then((res) => res.json())
        .then((data) => setProject(data[0]))
    }

    async function handleDelete(){
        await deleteProject(id);
        navigate("/projects", {replace: true});
    }

    // const destinationItems = project.destinations.map(dest => {
    //     return (
    //         <>
    //         <p>{dest.lkuCodeId}</p>
    //         <p>{dest.description}</p>
    //         </>
    //     )
    // })
    // console.log("di:" + destinationItems);
    if (!project) return <h1>Loading...</h1>

    return (
        <div>
            {/* {project && ( */}
                <>
            <h2>Project Details</h2>
            <h2>Title: {project.title}</h2>
            <p>Benefits: {project.benefits}</p>
            <p>Description: {project.description}</p>

            {project.destinations && project.destinations.map((element, key) => {
                return (
                    <div key={key}>
                    <span>{element.lkuCodeId}</span>
                    <span>{element.description}</span>
                    </div>
          );
        })}
            {/* <p> DESTS: {destinationItems}</p> */}
            {/* <p>Destinations: {project.destinations[0].description}</p> */}
            {/* {project.destinations.length === 2 ? <p>Destinations: {project.destinations[0].description}</p> : null} */}
            
            <p>Start Year: {project.startYear}</p>
            <p>Start Month: {project.startMonth}</p>
            <p>End Year: {project.endYear}</p>
            <p>End Month: {project.endMonth}</p>
            <div>
                <Link to={`/projects/${project.projectId}/edit`}>
                    <button>Edit Project</button>
                </Link>
                <button onClick={handleDelete}>Destroy Project</button>
            </div>
             </>   
             {/* )} */}
        </div>
    )
}