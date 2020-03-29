<template>
  <v-app>
    <!-- <div>
      <b-navbar toggleable="lg" type="dark" class="navbar">
        <b-navbar-brand href="#">
          <img src="navbarLogo.png" class="d-inline-block align-top" />
          E-PNR
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          
     
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Portfolio</b-nav-item>
            <b-nav-item href="#">Blog</b-nav-item>
            <b-nav-item href="#">Contacts</b-nav-item>

            <b-nav-form>
              <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button class="my-2 my-sm-0" icon size="sm" type="submit" id="searchButton">
                <v-icon id="search">mdi-magnify</v-icon>
              </b-button>
            </b-nav-form> -->

            <!-- <b-nav-item-dropdown right>
            
              <template v-slot:button-content>
                 <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
              </template>
              <b-dropdown-item href="#">
                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-3" placeholder="Search">
                    <v-btn icon size="sm" class="my-2 my-sm-1 " type="submit">
                      <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                  </b-form-input>
                </b-nav-form>
              </b-dropdown-item>
            </b-nav-item-dropdown>-->
          <!-- </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>  -->

    <v-content>
      <!-- <app-login>
        
      </app-login>-->

      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Login from './components/Login';



export default {
  name: "App",

  components: {
    // 'app-login':Login
    
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
.navbar {
  background-color: #cc0e00 !important;
}


#searchButton {
  border-color: white;
  background-color: #cc0e00 !important;
}

#search {
  color: white;
}
</style>
