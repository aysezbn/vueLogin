<template>
  <v-container>
    <v-row class="d-flex justify-content-center">
      <div class="col-sm-6 col-sm-offset-3">
        <h3 class="text-center font-weight-light pb-5">Ödeme</h3>
        <form>
          <div class="form-group pt-5">
            <label for="cc_name">
              <span>
                <i class="far fa-user mr-2"></i>
              </span> Kart Üzerindeki İsim
            </label>
            <input
              type="text"
              class="form-control"
              id="cc_name"
              pattern="\w+ \w+.*"
              title="First and last name"
              required="required"
            />
          </div>
          <div class="form-group row">
            <label class="col-md-12">
              <span>
                <i class="far fa-credit-card mr-2"></i>
              </span> Kart No
            </label>
            <div class="col-md-3">
              <input
                type="text"
                class="form-control"
                autocomplete="off"
                maxlength="4"
                pattern="\d{4}"
                title="First four digits"
                required
              />
            </div>
            <div class="col-md-3">
              <input
                type="text"
                class="form-control"
                autocomplete="off"
                maxlength="4"
                pattern="\d{4}"
                title="Second four digits"
                required
              />
            </div>
            <div class="col-md-3">
              <input
                type="text"
                class="form-control"
                autocomplete="off"
                maxlength="4"
                pattern="\d{4}"
                title="Third four digits"
                required
              />
            </div>
            <div class="col-md-3">
              <input
                type="text"
                class="form-control"
                autocomplete="off"
                maxlength="4"
                pattern="\d{4}"
                title="Fourth four digits"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-12">
              <span>
                <i class="far fa-calendar-alt mr-2"></i>
              </span> Son Kullanma Tarihi
            </label>
            <div class="col-md-9">
              <select class="form-control">
                <option value="01">Ocak</option>
                <option value="02">Şubat</option>
                <option value="03">Mart</option>
                <option value="04">Nisan</option>
                <option value="05">Mayıs</option>
                <option value="06">Haziran</option>
                <option value="07">Temmuz</option>
                <option value="08">Ağustos</option>
                <option value="09">Eylül</option>
                <option value="10">Ekim</option>
                <option value="11">Kasım</option>
                <option value="12">Aralık</option>
              </select>
            </div>
            <div class="col-md-3">
              <select class="form-control" name="cc_exp_yr">
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-12">CVV</label>
            <div class="col-md-3">
              <input
                type="text"
                class="form-control"
                autocomplete="off"
                maxlength="3"
                pattern="\d{3}"
                title="Three digits at back of your card"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-12 text-xs-right">
              <button type="button" class="btn btn-default mr-5">İptal Et</button>
              <button type="button" class="btn" id="paymentBtn">Öde</button>
            </div>
          </div>
        </form>
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.form-control:focus {
  border-color: rgba(204, 14, 0, 0.9);
  box-shadow: 0 1px 1px rgba(204, 14, 0, 0.075) inset,
    0 0 1px rgba(204, 14, 0, 0.6);
  outline: 0 none;
}

select option {
  color: #cc0e00 !important;
}
select:focus > option:checked {
  background: #cc0e00 !important;
  color: white !important;
}


#paymentBtn {
  background-color: #cc0e00;
  color: white;
  border-color: #cc0e00;
}

#paymentBtn:hover {
  background-color: white;
  color: #cc0e00;
  border-color: #cc0e00;
}

</style>