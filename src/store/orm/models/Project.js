import {
  Model,
} from '@vuex-orm/core';

import User from './User';
import Skill from './Skill';
import ProjectSkill from './ProjectSkill';

export default class extends Model {
  static entity = 'project'

  static fields() {
    return {
      id: this.attr(null),
      userId: this.attr(null),
      by: this.string(''),
      type: this.string(''),
      description: this.string(''),
      incentive: this.string(''),
      user: this.belongsTo(User, 'userId'),
      skills: this.belongsToMany(Skill, ProjectSkill, 'projectId', 'skillId'),
    };
  }
}
