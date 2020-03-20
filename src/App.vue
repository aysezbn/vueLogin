<template>
  <v-app>
   

    <v-content>
      <!-- <app-login></app-login> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Login from './components/Login';

export default {
  name: 'App',

  components: {
    // 'app-login':Login
  },

  data: () => ({
    //
  }),
};
</script>
