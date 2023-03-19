<template>
  <div class="homepage h-100">
    <b-container fluid class="h-100">
      <b-row class="h-100">
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          class="wrapper d-flex justify-content-start align-items-center"
        >
          <div class="content">
            <div class="group animate__animated animate__bounceIn">
              <h1 class="blast">C</h1>
              <h1 class="blast">o</h1>
              <h1 class="blast">n</h1>
              <h1 class="blast">t</h1>
              <h1 class="blast">a</h1>
              <h1 class="blast">c</h1>
              <h1 class="blast">t</h1>
              <h1 class="blast space">m</h1>
              <h1 class="blast">e</h1>
            </div>
            <div class="group animate__animated animate__bounceIn animate__delay-2s mt-2">
              <p>I am interested in freelance opportunities- espcially on large projects. However, if you have questions, don't hesitate to contact me using below form or message me on my social media accounts.</p>
            </div>
            <div class="group animate__animated animate__bounceIn animate__delay-2s mt-5">
              <b-form id="contact">
                <b-form-group>
                  <b-row>
                    <b-col cols="12" sm="12" md="6" lg="6">
                      <b-form-input type="text" placeholder="Name"></b-form-input>
                    </b-col>
                    <b-col cols="12" sm="12" md="6" lg="6">
                      <b-form-input type="email" placeholder="Email"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group>
                  <b-form-input type="text" placeholder="Subject"></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-textarea id="textarea" placeholder="Message" rows="3"></b-form-textarea>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" class="wrapper pr-0">
          <div class="content d-flex justify-content-center align-items-center h-100">
            <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.70922127212!2d121.11472998670045!3d13.958293531767945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6d1bb3dc6afd%3A0xb3d2b5eefcb2a5d4!2s226%20F.%20Silva%2C%20Mataas%20Na%20Kahoy%2C%20Batangas!5e0!3m2!1sen!2sph!4v1599827137802!5m2!1sen!2sph" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              <div class="info">
                  <p>Warren R. Velasco</p>
                  <p>0226 F. Silva, Mataas Na Kahoy, Batangas</p>
                  <p>Email: <a href="mailto:warrenreariovelasco@gmail.com">warrenreariovelasco@gmail.com</a></p>
            </div>-->
            <GmapMap
              :center="{lat:10, lng:10}"
              :zoom="7"
              map-type-id="terrain"
              style="width: 100%; height: 100%"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              />
            </GmapMap>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      center: { lat: 10.0, lng: 10.0 },
      markers: [
          {
              position: { lat: 10.0, lng: 10.0}
          },
          {
              position: { lat: 11.0, lng: 11.0}
          }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  .wrapper {
    padding-left: 120px;
    .content {
      .group {
        h1 {
          display: inline-block;
          font-size: 70px;
          font-weight: 700;
          margin-bottom: 0;
          line-height: 1;
          color: $primary-color;
        }
        img {
          width: 70px;
          position: relative;
          top: -22px;
        }
        h1.space,
        img.space {
          margin-left: 25px;
        }
        p {
          color: #ddd;
          margin-top: 20px;
          letter-spacing: 1.5px;
        }
      }
      .animate__bounceIn.animate__delay-1s {
        --animate-delay: 0.3s;
      }
      .animate__bounceIn.animate__delay-2s {
        --animate-delay: 0.3s;
      }
      input,
      textarea {
        border-radius: 0;
        background: #2b2b2b;
        color: #ddd;
        padding: 25px 15px;
        border: 0;
      }
      button {
        float: right;
        height: 40px;
        border: 1px solid $primary-color;
        border-radius: 3px;
        color: $primary-color;
        background: transparent;
        box-shadow: none;
        outline: none;
        padding: 10px 20px;
        font-size: 12px;
        text-transform: uppercase;
      }
      button:hover,
      button:focus {
        background: $primary-color;
        color: #2b2b2b;
      }
      .info {
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        top: 10px;
        right: 10px;
        width: 300px;
        height: auto;
        padding: 15px;
        p {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>