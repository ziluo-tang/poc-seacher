import axios from 'axios';
let promptBase = process.env.NODE_ENV==="development" ? '/application' : '', 
    searchBase = process.env.NODE_ENV==="development" ? '/apis' : 'http://139.64.40.240:8881';

export const autoPrompt = params => {
    return axios.post(`${promptBase}/search/default/`, params).then(res => res.data);
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