import {
  Model,
} from '@vuex-orm/core';

export default class extends Model {
  static entity = 'userShareable'

  static primaryKey = ['userId', 'shareableId']

  static fields() {
    return {
      userId: this.attr(null),
      shareableId: this.attr(null),
    };
  }
}
