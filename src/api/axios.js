import axios from 'axios';
let promptBase = '/application', searchBase = '/apis';

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