import * as _ from 'lodash';

export class BaseModel {

  constructor() {
    this.attrs = {};
  }

  static create(data) {}

  fill(data) {
    for (var key in data) {
      if (this.fillables.includes(key.split('.')[0])) {
        this.setAttr(key, data[key]);
      }
    }
    return this;
  }

  setAttr(key, value) {
    _.set(this.attrs, key, value);
    return this
  }

  getAttr(key) {
    return _.get(this.attrs, key);
  }

}
