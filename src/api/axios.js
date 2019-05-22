let base = '/api';

export const search = params => { return this.axios.get(`${base}/search`, params).then(res => res.data);};