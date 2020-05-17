<template>
  <div>
    <div class="d-none d-lg-block d-xl-none">
      <img
        class="img-fluid"
        id="carImg"
        src="https://d2egmpncr9xdtw.cloudfront.net/wp-content/uploads/2017/09/10046_3183.jpg"
      />
    </div>

    <v-container>
      <v-row>
        <v-col
          class="col-12 col-md-6 d-flex justify-content-center align-items-center"
          id="reservation"
        >
          <div>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-combobox
                  v-model="select"
                  :items="items"
                  label="Şehir ya da Havalimanı Seç"
                  color="#cc0e00"
                ></v-combobox>
              </v-col>
            </v-row>

            <v-row align="center" justify="center">
              <v-col cols="12" lg="3">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-x
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateFormatted"
                      label="Başlangıç Tarihi"
                      hint="MM/DD/YYYY"
                      color="#cc0e00"
                      persistent-hint
                      prepend-icon="far fa-calendar-alt"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" lg="3">
                <v-text-field
                  v-model="select"
                  :items="items"
                  label="Başlangıç Saati"
                  color="#cc0e00"
                  persistent-hint
                  prepend-icon="fas fa-clock"
                  readonly
                  v-on="on"
                ></v-text-field>
              </v-col>

              <v-col cols="12" lg="3">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-x
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="computedDateFormatted"
                      label="Bitiş Tarihi"
                      hint="MM/DD/YYYY"
                      color="#cc0e00"
                      persistent-hint
                      prepend-icon="far fa-calendar-alt"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" lg="3">
                <v-text-field
                  v-model="select"
                  :items="items"
                  label="Bitiş Saati"
                  color="#cc0e00"
                  persistent-hint
                  prepend-icon="fas fa-clock"
                  readonly
                  v-on="on"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="d-flex justify-content-center">
                <b-button href="#" variant class="Btn">Ara</b-button>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <div class="rent">
        <v-row>
          <v-col cols="12" class="d-flex justify-content-center">
            <h2 id="rentTitle">Araç Seçimi</h2>
          </v-col>
        </v-row>

        <v-row class="pt-5">
          <v-col cols="12">
            <h5>Hyundai i20</h5>
            <small>AVIS</small>
          </v-col>

          <v-col class="col-12 col-sm-6 col-md-6 col-lg-4">
            <img
              class="img-thumbnail img-fluid"
              id="rentCar"
              src="https://www.emrerentacar.com/dosya/1731/sinif/6-10-50-hyundai-i20.png"
            />
          </v-col>
          <v-col class="col-12 col-sm-6 col-md-6 col-lg-2">
              <p class="font-weight-light">            
                <i class="fas fa-gas-pump mr-3 rentIcon"></i>
              Dizel
            </p>

            <p class="font-weight-light">
                <i class="fas fa-snowflake mr-3 rentIcon"></i>
              Klima
            </p>

            <p class="font-weight-light">
                 <i class="fas fa-user mr-3 rentIcon"></i>
                5 yolcu
        </p>
        
            <p class="font-weight-light">
                <i class="fas fa-cog mr-3 rentIcon"></i> 
                 Manuel
        </p>
    
          </v-col>

          <v-col class="col-sm-6 col-md-6 col-lg-3 d-none d-sm-block" id="freeServices">
            <p>Ücretsiz Hizmetler : </p>
            <p>Kaza hasarından feragat</p>
            <p>Hırsızlık koruması</p>
            <p>Üçüncü şahıs sorumluluğu</p>
             </v-col>

          <v-col class="col-12 col-sm-12 col-md-6 col-lg-3 pt-5" id="rentRzv">
              <p id="rentPrice">1.024,67 <span><i class="fas fa-lira-sign"></i></span> <br> 
              <small>4 günlük fiyat</small>
              </p>
            <b-button href="payment" variant class="mt-5  Btn">Rezervasyon</b-button>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};

//   return {
//       select: ["Trabzon"],
//       items: ["Trabzon", "Sivas", "İstanbul", "İzmir"]
//     };
</script>


<style scoped>
p {
  font-size: 19px;
}

#carImg {
  height: 550px;
  width: 1800px;
}

#reservation {
  background-color: white;
  border: 1px solid #cc0e00;
  border-radius: 5px;
  position: relative;
  top: -320px;
}

.Btn {
  background-color: #cc0e00;
  color: white;
  border-color: #cc0e00;
}

.Btn:hover {
  background-color: white;
  color:#cc0e00;
  border-color:#cc0e00;
}

.rent {
  position: relative;
  top: -240px;
}

#rentTitle {
  color: #cc0e00;
}

#rentCar {
  width: 380px;
}

.rentIcon {
    color:#cc0e00;
}

#freeServices p {
    font-weight: 400;
    font-size: 17px;
}

#rentRzv {
  margin-top: 5px;
}

#rentPrice {
font-weight:500;
font-size: 22px;
}

@media only screen and (min-width: 1904px) {
  #reservation {
    top: 40px;
    left: 220px;
  }
  .rent {
    top: 100px;
  }
}

@media (min-width:1200px) and (max-width: 1263px) {
  #reservation {
    top: 40px;
    left: 240px;
  }
  .rent {
    top: 120px;
  }
}

@media (min-width:992px) and (max-width: 1199px) {
  #reservation {
    top: 40px;
    left: 200px;
  }
  .rent {
    top: 120px;
  }
}

@media (min-width:768px) and (max-width: 991px) {
  #reservation {
    top: 40px;
    left: 150px;
  }
  .rent {
    top: 120px;
  }
}

@media (min-width:320px) and (max-width: 767px) {
  #reservation {
    top: 40px;
    left:0px;
  }
  .rent {
    top: 120px;
  }
  .Btn {
    display: flex;
    justify-content: center;
  }
}

</style>

