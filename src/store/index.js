import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

import VuexORM from '@vuex-orm/core';
import VuexORMAxios from '@vuex-orm/plugin-axios';
import createPersistedState from 'vuex-persistedstate';

import database from './orm/database';

Vue.use(Vuex);

VuexORM.use(VuexORMAxios, { axios });


const store = new Vuex.Store({
  plugins: [
    VuexORM.install(database),
    createPersistedState(),
  ],
});

export default store;
