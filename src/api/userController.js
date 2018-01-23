import request from '../config/request';

export const listPurchase = (query) => {
  return request(`inventory/purchaseIn/show?status=${query.status}&&name=${query.name}&&num_per_page=${query.num_per_page}&&page=${query.page}`, 'get', null).then((data) => {
    return data;
  });
};

export const userList = (query) => {
  return request(`users/show?status=${query.status}&&name=${query.name}&&num_per_page=${query.num_per_page}&&page=${query.page}`, 'get', null).then((data) => {
    return data;
  });
};