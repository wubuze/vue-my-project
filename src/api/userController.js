import request from '../config/request';
import { UserModel } from '../models/user';

export const listUser = (page, numPerPae, status, roleId, name) => {
  return request(`users/show?page=${page}&num_per_pae=${numPerPae}&role_id=${roleId}&name=${name}&status=${status}`, 'get', null, true).then((data) => {
    let userList = data.users.data.map((e) => {
      return UserModel.create(e).attrs;
    });
    return userList;
  });
};