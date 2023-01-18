import api from "./apiConfig.js";

export const getProjects = async () => {
    try {
        let res = await api.get("/projects");
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const getProject = async (id) => {
    try{
        let res = await api.get(`/projects/${id}`);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const createProject = async (projData) => {
    try{
        let res = await api.post('/projects', projData)
        return res.data;
    } catch (err){
        throw err;
    }
}

export const updateProject = async (id, projData) => {
    try{
        let res = await api.put(`/projects/${id}`, projData);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const deleteProject = async (id) => {
    try {
        let res = await api.delete(`/projects/${id}`);
        return res.data;
    } catch (err) {
        throw err;
    }
}