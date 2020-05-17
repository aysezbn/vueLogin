<template>
  <div>
    <div class="d-none d-lg-block d-xl-none">
      <img
        class="img-fluid"
        id="flightImg"
        src="https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
      />
    </div>

    <v-container>
      <v-row>
        <v-col class="col-12 col-md-6 d-flex justify-content-center align-items-center" id="reservation">
          <div>
            <v-row align="center" justify="center">
              <v-col cols="12" lg="6">
                <v-combobox v-model="select" :items="items" label="Nereden" color="#cc0e00"></v-combobox>
              </v-col>
              <v-col cols="12" lg="6">
                <v-combobox v-model="select" :items="items" label="Nereye" color="#cc0e00"></v-combobox>
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
                <b-button href="#" variant class="Btn">Ara</b-button>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <div class="flights">
        <v-row>
          <v-col cols="12" class="d-flex justify-content-center">
            <h2 id="flightTitle">Uçuş Seçimi</h2>
          </v-col>
        </v-row>

        <v-row class="pt-5">
          <v-col class="col sm-6 col-md-3 col-lg-3">
            <p class="text-muted">Nereden</p>
            <p class="font-weight-bold">08:40</p>
          </v-col>
          <v-col class="col-lg-3 d-none d-lg-block d-xl-none">
            <p>Direkt Uçuş</p>
            <span>
              <i class="fas fa-long-arrow-alt-right fa-2x pl-5"></i>
            </span>
          </v-col>
          <v-col class="col-sm-6 col-md-3 col-lg-3">
            <p class="text-muted">Nereye</p>
            <p class="font-weight-bold">10:35</p>
          </v-col>
          <v-col class="col-sm-6 col-md-3 col-lg-2">
            <p class="font-weight-bold pt-5">TRY 758,00</p>
          </v-col>
          <v-col class="col-sm-6  col-md-3 col-lg-1 pt-5">
            <b-button  href="payment" variant class="Btn">Rezervasyon</b-button>
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

#flightImg{
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

.flights {
  position: relative;
  top: -240px;
}

#flightTitle {
  color: #cc0e00;
}

 @media only screen and (min-width: 1904px) {
  #reservation {
    top: 40px;
    left: 280px;
  }
  .flights {
    top: 100px;
  }
}

@media (min-width:1200px) and (max-width: 1263px) {
  #reservation {
    top: 40px;
    left: 280px;
  }
  .flights {
    top: 120px;
  }
}

@media (min-width:995px) and (max-width: 1199px) {
  #reservation {
    top: 40px;
    left: 230px;
  }
  .flights {
    top: 120px;
  }
}


@media (min-width:768px) and (max-width: 994px) {
  #reservation {
    top: 40px;
    left: 180px;
  }
  .flights {
    top: 120px;
  }
}

@media (min-width:320px) and (max-width: 767px) {
  #reservation {
    top: 40px;
    left:0px;
  }
  .flights {
    top: 120px;
  }
  .Btn {
    display: flex;
    justify-content: center;
  }
}

</style>

