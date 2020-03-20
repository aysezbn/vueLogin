 <template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <img src="../LOGO.png" class="rounded mx-auto d-block" id="logo" />
        </v-col>

        <v-col cols="12" class="text-center">
          <h5>E-PNR Giriş Yap</h5>
        </v-col>

        <v-col cols="12" sm="4" id="loginForm" class="logIn">
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="E-Mail Adresiniz"
              required
              color="#EA2027"
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="passwordRules"
              label="Şifreniz"
              required
              color="#EA2027"
            ></v-text-field>

            <a
              href="#"
              id="passwordHelp"
              class="form-text text-muted float-right"
              @click.prevent="forgot"
            >
              <small>Şifremi unuttum</small>
            </a>

            <v-col cols="12" class="p-5">
              <v-btn color class="mr-4 white--text" id="loginBtn" @click="reset">GİRİŞ YAP</v-btn>
            </v-col>
          </v-form>
        </v-col>

        <v-col cols="12" class="text-center">
          <h5>Hesabınız yok mu?</h5><span><a href="#" class="uyeLink">Üye Olun!</a> </span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    forgot() {
      alert("password");
    }
  }
};
</script>

<style scoped>
.logIn {
  border: 2px solid #cc0e00;
  border-radius: 6px;
  width: 50%;
}

#loginBtn {
  position: absolute;
  right: 35%;
  background-color: #cc0e00;
}

/* #signupBtn {
  position: absolute;
  right: 36%;
  border-color: #cc0e00;
  background-color: white;
  color: black !important;
} */

.uyeLink {
  color: #cc0e00;
}
</style>