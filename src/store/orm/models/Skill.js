import {
  Model,
} from '@vuex-orm/core';

import User from './User';
import UserSkill from './UserSkill';
import Project from './Project';
import ProjectSkill from './ProjectSkill';

export default class extends Model {
  static entity = 'skill'

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(''),
      slug: this.string(''),
      users: this.belongsToMany(User, UserSkill, 'skillId', 'userId'),
      projects: this.belongsToMany(Project, ProjectSkill, 'skillId', 'projectId'),
    };
  }
}
