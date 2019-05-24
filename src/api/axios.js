import axios from 'axios';
let base = '/apis';

export const cloudQuery = params => { return axios.post(`${base}/ai-search/version1.0/search`, params).then(res => res.data);};