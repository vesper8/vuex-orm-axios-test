import {
  Model,
} from '@vuex-orm/core';

import Project from './Project';
import Skill from './Skill';
import UserSkill from './UserSkill';
import Shareable from './Shareable';
import UserShareable from './UserShareable';

export default class extends Model {
  static entity = 'user'

  static fields() {
    return {
      id: this.attr(null),
      email: this.string(''),
      name: this.string(''),
      slug: this.string(''),
      aboutMe: this.string(''),
      avatar: this.string(''),
      projects: this.hasMany(Project, 'userId'),
      skills: this.belongsToMany(Skill, UserSkill, 'userId', 'skillId'),
      shareables: this.belongsToMany(Shareable, UserShareable, 'userId', 'shareableId'),
    };
  }
}
