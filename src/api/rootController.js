import request from '../config/request';


export const login = (data) => request('auth/login', 'post', data);

export const  test = () => request(`jsonTest`, 'get', null);

