import Vue from 'vue';
import Vuex from 'vuex';

import VuexORM from '@vuex-orm/core';

import User from './models/User';
import UserSkill from './models/UserSkill';
import UserShareable from './models/UserShareable';
import Project from './models/Project';
import Skill from './models/Skill';
import Shareable from './models/Shareable';
import ProjectSkill from './models/ProjectSkill';

Vue.use(Vuex);

// Create new instance of Database.
const database = new VuexORM.Database();

database.register(User);
database.register(Project);
database.register(Skill);
database.register(UserSkill);
database.register(Shareable);
database.register(UserShareable);
database.register(ProjectSkill);

export default database;
