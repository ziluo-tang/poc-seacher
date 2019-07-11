import axios from 'axios';
import { promises } from 'fs';
let addAppsBase = process.env.NODE_ENV==="development" ? '/add-apps' : 'http://139.64.40.240:8811',
    promptApp = process.env.NODE_ENV==="development" ? '/prompt-apps' : 'http://139.64.40.240:8810',
    promptBase = process.env.NODE_ENV==="development" ? '/prompt-base' : 'http://139.64.40.240:8809',
    searchBase = process.env.NODE_ENV==="development" ? '/apis' : 'http://139.64.40.240:8881';
    


export const addApplication = params => {
    return axios.post(`${addAppsBase}/app/addApplication`, params).then(res => res.data);
}

export const autoPrompt = params => {
    return Promise.all([axios.post(`${promptApp}/aiSearch/getApplication`, params), axios.post(`${promptBase}/aiSearch/getTarget`, params)]);
}

export const cloudQuery = params => { 
    return axios.post(`${searchBase}/ai-search/version1.0/search`, params).then(res => res.data);
}

export const detailsQuery = params => {
    return axios.post(`${searchBase}/ai-search/version1.0/termSearch`, params).then(res => res.data);
}

export const pageQuery = (urlParams, params) => {
    return axios.post(`${searchBase}/ai-search/version1.0/pageSearch?${urlParams}`, params).then(res => res.data);
}