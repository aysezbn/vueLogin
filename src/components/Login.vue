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
              class="pt-5"
              v-model="email"
              :rules="emailRules"
              label="E-Mail Adresiniz"
              required
              outlined
              color="#cc0e00"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Şifreniz"
              outlined
              color="#cc0e00"
              required
              @click:append="show1 = !show1"
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
              <v-btn color class="mr-1 white--text" id="loginBtn" @click="reset">GİRİŞ YAP</v-btn>
            </v-col>
          </v-form>
        </v-col>

        <v-col cols="12" class="text-center pt-5">
          <h5>Hesabınız yok mu?</h5>
          <span>
            <a href="signUp" class="uyeLink">Üye Olun!</a>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  }
};
</script>

<style scoped>
#loginBtn {
  position: absolute;
  right: 25%;
  background-color: #cc0e00;
  width: 50%;
}

.uyeLink {
  color: #cc0e00;
}
</style>