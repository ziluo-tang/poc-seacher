import axios from 'axios';
import { promises } from 'fs';
let promptBase = process.env.NODE_ENV==="development" ? '/application' : '', 
    searchBase = process.env.NODE_ENV==="development" ? '/apis' : 'http://139.64.40.240:8881';

export const addApplication = params => {
    return axios.post(`http://192.168.8.120:8811/index/addApplication`, params).then(res => res.data);
}

export const autoPrompt = params => {
    return Promise.all([axios.post(`http://192.168.8.120:8810/search/default`, params), axios.post(`http://192.168.8.120:8809/aiSearch/getTarget`, params)]);
    // return axios.post(`${promptBase}/search/default/`, params).then(res => res.data);
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