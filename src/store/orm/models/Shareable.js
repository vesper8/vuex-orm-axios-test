import {
  Model,
} from '@vuex-orm/core';

import User from './User';
import UserShareable from './UserShareable';

export default class extends Model {
  static entity = 'shareable'

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(''),
      slug: this.string(''),
      users: this.belongsToMany(User, UserShareable, 'shareableId', 'userId'),
    };
  }
}
