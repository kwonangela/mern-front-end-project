import axios from "axios";

let apiUrl;

const apiUrls = {
    production: "https://nasaprojectapi-production.up.railway.app/api/",
    development: "https://nasaprojectapi-production.up.railway.app/api/"
};

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development;
} else {
    apiUrl = apiUrls.production;
}

// axios part
const api = axios.create({
    baseURL: apiUrl,
});

export default api;