import {
  Model,
} from '@vuex-orm/core';

export default class extends Model {
  static entity = 'projectSkill'

  static primaryKey = ['projectId', 'skillId']

  static fields() {
    return {
      projectId: this.attr(null),
      skillId: this.attr(null),
    };
  }
}
