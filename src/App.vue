<template>
  <v-app>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <v-container>
  <a class="navbar-brand navbarText" href="#" >E-PNR</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link navbarText" href="#">Anasayfa <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown pr-5">
        <a class="nav-link dropdown-toggle navbarText" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hizmetlerimiz
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item dropdownText" href="flight">Uçuşlar</a>
          <a class="dropdown-item dropdownText" href="accommodation">Konaklama</a>
          <a class="dropdown-item dropdownText" href="rent">Araç kiralama</a>
        </div>
      </li>
      <li class="nav-item pl-5">
        <a class="nav-link navbarText" href="Login"> <span> <i class="fas fa-sign-in-alt"></i> </span> Giriş Yap</a>
      </li>
      <li class="nav-item pl-5">
        <a class="nav-link navbarText" href="signUp"> <span><i class="fas fa-user-plus"></i></span> Üye Ol</a>
      </li>
    </ul>
  </div>
  </v-container>
</nav>


    <v-content>
      <!-- <app-login>
        
      </app-login>-->

      <router-view></router-view>
    </v-content>


<!-- class="d-none d-lg-block d-xl-block" -->

    <v-footer color="#cc0e00" >

      <v-layout justify-center row wrap>
          <v-flex  py-3 text-center white--text >
            &copy;2020  <strong>Mert Çakmak</strong>
          </v-flex>
      </v-layout>
      </v-footer>
     

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

.navbarText {
  color: white!important;
}

.dropdownText {
  color:#cc0e00;
}

.dropdownText:hover {
  color:white;
  background-color: #cc0e00;
}

</style>
