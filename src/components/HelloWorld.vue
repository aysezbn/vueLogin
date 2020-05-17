<template>
  <div>
    <section class="slider d-none d-lg-block d-xl-none">
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </section>

    <section class="pt-5">
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-6 col-md-6 col-lg-4">
            <i class="fas fa-plane serviceButton"></i>
            <h3 class="serviceHeading">Uçuşlar</h3>
            <p
              class="text-muted"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero eaque cum officiis explicabo ut laborum deleniti, fuga doloremque nesciunt non, in quia magni reprehenderit ad, nihil blanditiis voluptatibus ipsa.</p>
          </v-col>
          <v-col class="col-12 col-sm-6 col-md-6 col-lg-3">
            <p class="arrowRight">
              <span>
                <i class="fas fa-angle-right"></i>
              </span> Lorem ipsum dolor sit amet.
            </p>
            <p>
              <span>
                <i class="fas fa-angle-right"></i>
              </span> Lorem ipsum dolor sit amet.
            </p>
            <p>
              <span>
                <i class="fas fa-angle-right"></i>
              </span> Lorem ipsum dolor sit amet.
            </p>
            <b-button href="flight" variant size="sm" class="moreButton">Daha Fazla</b-button>
          </v-col>
          <v-col cols="col-md-5 col-lg-5 " class="d-none d-sm-none d-md-block">
            <img
              class="images"
              src="https://cdntr1.img.sputniknews.com/img/102943/65/1029436501_0:151:2902:1720_1000x541_80_0_0_133a4b4f8695a572a282153b0236bab9.jpg"
            />
          </v-col>
        </v-row>

        <v-row class="pt-5">
          <v-col cols="6" class="d-none d-sm-none d-md-block">
            <img
              class="images"
              src="https://i.dunya.com/1/670/377/files/2018/10/11/429704/429704.jpg?v=1539239402"
            />
          </v-col>
          <v-col class="col-12 col-sm-6 col-md-6 col-lg-3">
            <i class="fas fa-hotel serviceButton"></i>
            <h3 class="serviceHeading">Konaklama</h3>
            <p
              class="text-muted"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero eaque cum officiis explicabo ut laborum deleniti, fuga doloremque nesciunt non, in quia magni reprehenderit ad, nihil blanditiis voluptatibus ipsa.</p>
          </v-col>

          <v-col class="col-12 col-sm-6 col-md-6 col-lg-3">
            <p class="arrowRight">
              <span>
                <i class="fas fa-angle-right"></i>
              </span> Lorem ipsum dolor sit amet.
            </p>
            <p>
              <span>
                <i class="fas fa-angle-right"></i>
              </span> Lorem ipsum dolor sit amet.
            </p>
            <p>
              <span>
                <i class="fas fa-angle-right"></i>
              </span> Lorem ipsum dolor sit amet.
            </p>
            <b-button href="accommodation" variant size="sm" class="moreButton">Daha Fazla</b-button>
          </v-col>
        </v-row>

        <v-row class="pt-5">
          <v-col class="col-12 col-sm-6 col-md-6 col-lg-4">
            <i class="fas fa-car serviceButton"></i>
            <h3 class="serviceHeading">Araç kiralama</h3>
            <p
              class="text-muted"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero eaque cum officiis explicabo ut laborum deleniti, fuga doloremque nesciunt non, in quia magni reprehenderit ad, nihil blanditiis voluptatibus ipsa.</p>
          </v-col>
          <v-col class="col-12 col-sm-6 col-md-6 col-lg-3">
            <p class="arrowRight">
              <span>
                <i class="fas fa-angle-right"></i>
              </span> Lorem ipsum dolor sit amet.
            </p>
            <p>
              <span>
                <i class="fas fa-angle-right"></i>
              </span> Lorem ipsum dolor sit amet.
            </p>
            <p>
              <span>
                <i class="fas fa-angle-right"></i>
              </span> Lorem ipsum dolor sit amet.
            </p>
            <b-button href="rent" variant size="sm" class="moreButton">Daha Fazla</b-button>
          </v-col>
          <v-col cols="col-md-5 col-lg-5" class="d-none d-sm-none d-md-block">
            <img
              class="images"
              src="https://amp.thenational.ae/image/policy:1.770207:1562668223/bz15-VVBeetle.jpg?f=16x9&w=1200&$p$f$w=28f29f9"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="signUp" class="d-none d-sm-block">
      <v-container fluid id="parallaxText">
        <h4>
          Neden
          <span class="redText">E-PNR</span>.com'a üye olmalıyım?
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur elit tempora saepe quod voluptates perspiciatis quae. Blanditiis ut doloremque delectus?</p>
        <b-button href="signUp" size="lg" id="signUpBtn">Üye Ol</b-button>
      </v-container>
    </section>

    <section class="pt-5 d-none d-sm-block" id="testimonials">
      <v-container>
        <h4 class="text-center">Kullanıcı Yorumları</h4>
        <v-row class="pt-5">
          <v-col cols="12" md="4" class="text-center yorumlar">
            <div class="profile">
              <img
                src="https://lh6.googleusercontent.com/proxy/2xoTqVDitQStIxetDsDvdoda5q29ILPKssBdUDq0I5OnVk-hJt0xb-ZHXcgg2Er8zDJnCPdfPnZhuzM9z4_bNoHE8nblD1ip2EtDu62URnH7cqxhWCNGk47VKt4KZQ"
                class="user"
              />
              <blockquote>
                <span>
                  <i class="fas fa-quote-left" id="quote"></i>
                </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, commodi? Expedita accusantium beatae nobis at.
                <span>
                  <i class="fas fa-quote-right" id="quote"></i>
                </span>
              </blockquote>
              <p>
                <span class="comments mr-2">Lorem Ipsum</span> XYZ şirketi yöneticisi
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="text-center yorumlar">
            <div class="profile">
              <img
                src="https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg"
                class="user"
              />
              <blockquote>
                <span>
                  <i class="fas fa-quote-left" id="quote"></i>
                </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, commodi? Expedita accusantium beatae nobis at.
                <span>
                  <i class="fas fa-quote-right" id="quote"></i>
                </span>
              </blockquote>
              <p>
                <span class="comments mr-2">Lorem Ipsum</span> XYZ şirketi yöneticisi
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="text-center yorumlar">
            <div class="profile">
              <img
                src="https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404.jpg"
                class="user"
              />
              <blockquote>
                <span>
                  <i class="fas fa-quote-left" id="quote"></i>
                </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, commodi? Expedita accusantium beatae nobis at.
                <span>
                  <i class="fas fa-quote-right" id="quote"></i>
                </span>
              </blockquote>
              <p>
                <span class="comments mr-2">Lorem Ipsum</span> XYZ şirketi yöneticisi
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      items: [
        {
          src:
            "https://i2.haber7.net//haber/haber7/photos/2018/11/turk_hava_yollari_tarihinde_bir_ilk_1520865226_7453.jpg"
        },
        {
          src:
            "https://image.motor.at/images/cfs_landscape_1864w_1049h/1872364/vw_beetle_werk_01.jpg"
        },
        {
          src: "https://santai.ichotels.com.tr/photos/santai.jpg"
        }
      ]
    };
  }
};
</script>


<style scoped>
.serviceButton {
  color: #cc0e00;
  font-size: 35px;
}

.serviceHeading {
  color: #cc0e00;
  margin-top: 15px;
}

.arrowRight {
  margin-top: 90px;
}

.images {
  width: 400px;
}

.moreButton {
  background-color: #cc0e00;
  color: white;
  border-color: #cc0e00;
}

.moreButton:hover {
  background-color: white;
  color:#cc0e00;
  border-color:#cc0e00;
}

#signUp {
  background-image: url("https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=974&q=80");
  height: 300px;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(85%);
  margin-top: 30px;
  margin-bottom: 30px;
}

#signUpBtn {
  background-color: #cc0e00;
  border-color: #cc0e00;
  color: white;
}

#parallaxText {
  word-spacing: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#parallaxText h4 {
  margin-top: 38px;
}

#parallaxText p {
  margin-top: 15px;
  text-align: center;
  font-size: 21px;
}

.redText {
  color: #cc0e00;
}

#testimonials {
  margin: 15px auto;
}

#testimonials .row {
  margin-top: 50px;
}

.yorumlar {
  margin: 30px auto;
}

.yorumlar p {
  font-size: 15px;
}

.profile {
  padding: 70px 10px 10px;
  background-color: #f5f6fa;
}

.profile img {
  top: -60px;
  position: absolute;
  left: calc(50% - 60px);
  border: 1px solid white;
}

.user {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.profile:hover {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

#testimonials h4 {
  color: #cc0e00;
}

#quote {
  color: #cc0e00;
  font-size: 16px;
  margin: 5px;
}

.comments {
  color: #cc0e00;
  font-size: 16px;
}

@media only screen and (max-width: 575px) {
  .arrowRight {
    margin-top: 0px;
  }
  .moreButton {
    margin-bottom: 25px;
  }
}
</style>