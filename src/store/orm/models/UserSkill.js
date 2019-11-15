import {
  Model,
} from '@vuex-orm/core';

export default class extends Model {
  static entity = 'userSkill'

  static primaryKey = ['userId', 'skillId']

  static fields() {
    return {
      userId: this.attr(null),
      skillId: this.attr(null),
    };
  }
}
