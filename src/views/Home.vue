<template>
  <div>
    <pre>{{ ormCount }}</pre>
  </div>
</template>

<script>
import User from '@/store/orm/models/User';
import Project from '@/store/orm/models/Project';
import Skill from '@/store/orm/models/Skill';
import Shareable from '@/store/orm/models/Shareable';
import UserShareable from '@/store/orm/models/UserShareable';
import UserSkill from '@/store/orm/models/UserSkill';
import ProjectSkill from '@/store/orm/models/ProjectSkill';

export default {
  data() {
    return {
      ormCount: {
        users: 0,
        projects: 0,
        skills: 0,
        shareables: 0,
        userSkills: 0,
        userShareables: 0,
        projectSkills: 0,
      },
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    async loadData() {
      if (User.all().length === 0) {
        console.log('loading data from api');
        this.fetchData();
      } else {
        console.log('data being loaded from vuex-persistedstate');

        this.fixPivotHydration();

        this.printOrmRecords();
      }
    },

    async fetchData() {
      await User.api().get('https://my-json-server.typicode.com/vesper8/vuex-orm-axios-test/users');

      this.printOrmRecords();
    },

    fixPivotHydration() {
      Object.keys(this.$store.state.entities.userSkill.data).forEach((userSkill) => {
        UserSkill.insertOrUpdate({
          data: this.$store.state.entities.userSkill.data[userSkill],
        });
      });
      Object.keys(this.$store.state.entities.userShareable.data).forEach((userShareable) => {
        UserShareable.insertOrUpdate({
          data: this.$store.state.entities.userShareable.data[userShareable],
        });
      });
      Object.keys(this.$store.state.entities.projectSkill.data).forEach((projectSkill) => {
        ProjectSkill.insertOrUpdate({
          data: this.$store.state.entities.projectSkill.data[projectSkill],
        });
      });
    },

    printOrmRecords() {
      this.ormCount = {
        users: User.query().count(),
        projects: Project.query().count(),
        skills: Skill.query().count(),
        shareables: Shareable.query().count(),
        userSkills: UserSkill.query().count(),
        userShareables: UserShareable.query().count(),
        projectSkills: ProjectSkill.query().count(),
      };

      console.log('data-loader.users', User.query().withAll().get());
      console.log('data-loader.projects', Project.query().withAll().get());
      console.log('data-loader.skills', Skill.query().withAll().get());
      console.log('data-loader.shareables', Shareable.query().withAll().get());
      console.log('data-loader.userShareables', UserShareable.all());
      console.log('data-loader.userSkills', UserSkill.all());
      console.log('data-loader.projectSkills', ProjectSkill.all());
    },
  },
};
</script>
