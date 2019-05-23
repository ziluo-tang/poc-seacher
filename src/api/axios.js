import axios from 'axios';
let base = '/apis';

export const getWeather = (url, params={}) => { return axios.post(`${base}/${url}`, params).then(res => res.data);};