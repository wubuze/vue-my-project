import request from '../config/request';


export const login = (data) => request('login', 'post', data);

export const  test = () => request(`jsonTest`, 'get', null);

