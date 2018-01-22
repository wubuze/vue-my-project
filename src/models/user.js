import { BaseModel } from './base';

export class UserModel extends BaseModel {

  get fillables() {
    return ['id', 'name', 'email', 'created_at', 'updated_at', 'gender', 'avatar_path', 'birthday', 'qq', 'activated'];
  }

  constructor() {
    super();
  }

  static create(data) {
    let user = new UserModel();
    return user.fill(data);
  }
}
