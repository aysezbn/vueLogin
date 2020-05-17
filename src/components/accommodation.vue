<template>
  <div>
    <div class="d-none d-lg-block d-xl-none">
      <img
        class="img-fluid"
        id="accommodationImg"
        src="https://sealightresort.sealighthotels.com/_cache/croped/slider_2018-06-12_13-45-57-1920x760.jpg"
      />
    </div>

    <v-container>
      <v-row>
        <v-col class="col-12 col-md-6 d-flex justify-content-center align-items-center" id="reservation">
          <div>
            <v-row align="center" justify="center">
              <v-col cols="12" lg="6">
                <v-combobox
                  v-model="select"
                  :items="items"
                  label="Konaklayacağınız Şehir"
                  color="#cc0e00"
                ></v-combobox>
              </v-col>
              <v-col cols="12" lg="6">
                <v-combobox v-model="select" :items="items" label="Kişi sayısı" color="#cc0e00"></v-combobox>
              </v-col>
            </v-row>

            <v-row align="center" justify="center">
              <v-col cols="12" lg="6">
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
                      label="Gidiş tarihi"
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

              <v-col cols="12" lg="6">
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
                      label="Dönüş Tarihi"
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
            </v-row>

            <v-row>
              <v-col cols="12" class="d-flex justify-content-center">
                <b-button href="#" variant class="Btn">Otel Ara</b-button>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <div class="accommodation">
        <v-row>
          <v-col cols="12" class="d-flex justify-content-center">
            <h2 id="otelTitle">Otel Seçimi</h2>
          </v-col>
        </v-row>

        <v-row class="pt-5">
          <v-col cols="12">
            <h5>Ramada Plaza by Wyndham Trabzon</h5>
            <small>Gülyalı Mevkii Rize Cad. No.: 23, Trabzon, 61000, Türkiye, 0850 282 5020</small>
          </v-col>

          <v-col class="col-12 col-md-6 col-lg-6">
            <img
              class="img-thumbnail img-fluid"
              id="otelRoom"
              src="https://imagessl.etstur.com/files/images/hotelImages/integration/TR/55533/l/yt1nigptuwtmebtsbtpi.jpg"
            />
          </v-col>
          <v-col class="col-12 col-md-4 col-lg-4">
            <p>
              <span>
                <i class="fas fa-map-marker-alt fa-2x"></i>
              </span>
              Ortahisar
            </p>
            <v-row>
              <v-col class="col-12 col-md-6 col-lg-6">
                <span>
                  <i class="fas fa-parking"></i>
                </span> Ücretsiz otopark
              </v-col>
              <v-col class="col-12 col-md-6 col-lg-6">
                <span>
                  <i class="fas fa-swimmer"></i>
                </span> Havuz
              </v-col>
            </v-row>

            <v-row>
              <v-col class="col-12 col-md-6 col-lg-6">
                <span>
                  <i class="fas fa-bus"></i>
                </span> Havaalanı transferi
              </v-col>
              <v-col class="col-12 col-md-6 col-lg-6">
                <span>
                  <i class="fas fa-snowflake"></i>
                </span> Klima
              </v-col>
            </v-row>

            
            <v-row>
              <v-col class="col-md-6 col-lg-6 d-none d-md-block d-lg-block d-xl-none">
                <span>
                  <i class="fas fa-dumbbell"></i>
                </span>  Spor salonu
              </v-col>
            </v-row>
          </v-col>

          <v-col class="col-12  col-md-2 col-lg-2 pt-5">
            <b-button href="payment" variant class="Btn" id="otelRzrv">Rezervasyon</b-button>
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

#accommodationImg {
  height: 550px;
  width: 1800px;
}

#reservation {
  background-color: white;
  border: 1px solid #cc0e00;
  border-radius: 5px;
  position: relative;
  top: -310px;
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

.accommodation {
  position: relative;
  top: -240px;
}

#otelTitle {
  color: #cc0e00;
}

#otelRoom {
  width: 420px;
}

#otelRzrv {
    margin-top:70px;
}


@media only screen and (min-width: 1904px) {
  #reservation {
    top: 40px;
    left: 280px;
  }
  .accommodation {
    top: 100px;
  }
}

@media (min-width:1200px) and (max-width: 1263px) {
  #reservation {
    top: 40px;
    left: 280px;
  }
  .accommodation {
    top: 120px;
  }
}

@media (min-width:992px) and (max-width: 1199px) {
  #reservation {
    top: 40px;
    left: 230px;
  }
  .accommodation {
    top: 120px;
  }
}


@media (min-width:768px) and (max-width: 991px) {
  #reservation {
    top: 40px;
    left: 180px;
  }
  .accommodation {
    top: 120px;
  }
}

@media (min-width:320px) and (max-width: 767px) {
  #reservation {
    top: 40px;
    left:0px;
  }
  .accommodation {
    top: 120px;
  }
  .Btn {
    display: flex;
    justify-content: center;
  }
 #otelRzrv {
   margin-top: 5px;
 }
}

</style>

