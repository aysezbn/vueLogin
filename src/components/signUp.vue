<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center pt-4">
          <h5 class="pt-5">E-PNR'e Katıl</h5>
          <h2 class="pt-5">Hesabınızı Oluşturun</h2>
        </v-col>

        <v-col cols="12" sm="5" class="pt-5">
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              outlined
              label="Kullanıcı Adınız"
              color="#cc0e00"
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-Mail Adresiniz"
              outlined
              required
              color="#cc0e00"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Şifreniz"
              hint="En az 8 karakter girin"
              counter
              outlined
              color="#cc0e00"
              required
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-col cols="12" class="p-5">
              <v-btn color large class="mr-1 white--text" id="signupBtn" @click="reset">Üye Ol</v-btn>
            </v-col>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  }
};
</script>
<style scoped>
#signupBtn {
  position: absolute;
  right: 25%;
  background-color: #cc0e00;
  width: 50%;
}
</style>
