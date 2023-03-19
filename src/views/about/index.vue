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
              <h1 class="blast">A</h1>
              <h1 class="blast">b</h1>
              <h1 class="blast">o</h1>
              <h1 class="blast">u</h1>
              <h1 class="blast">t</h1>
              <h1 class="blast space">m</h1>
              <h1 class="blast">e</h1>
            </div>
            <div class="group animate__animated animate__bounceIn animate__delay-2s">
              <p>
                Experienced web designer and frontend developer for more than 6 years.
                Knowledgeable in terms of designing and creating websites and familiar on
                web development trends.
              </p>
              <p>
                A problem solver, well organized person and employee with high attention to details.
                Love to do outdoor activities, watching TV series and listening to musics. A family oriented person and God-fearing man.
              </p>
              <p>Continue to strive for improvement espcially on the field of front end development and working enthusiastic on projects with positive people.</p>
            </div>
            <div class="group animate__animated animate__bounceIn animate__delay-2s">
              <img class="w-100 mt-5 pt-3" src="@/assets/images/about/timline.png" alt="">
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" class="wrapper pl-0">
          <div class="content d-flex justify-content-center align-items-center h-100">
            <section id="pyramid">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </section>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
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
      .flat-button {
        color: $primary-color;
        font-size: 13px;
        letter-spacing: 4px;
        font-family: "Open Sans", sans-serif;
        text-decoration: none;
        padding: 10px 18px;
        border: 1px solid $primary-color;
        margin-top: 25px;
        float: left;
        transition: all 0.5s;
      }
      .flat-button:hover {
        background: $primary-color;
        color: #333;
      }
      /**
 * ----------------------------------------
 * Pyramid Css
 * ----------------------------------------
 */
      #pyramid {
        position: absolute;
        margin-top: 70px;
        height: 500px;
        width: 100px;
        -webkit-transform-style: preserve-3d;
        -webkit-animation: spin 10s linear infinite;
        -webkit-transform-origin: 116px 200px 116px;
        -moz-transform-style: preserve-3d;
        -moz-animation: spin 10s linear infinite;
        -moz-transform-origin: 116px 200px 116px;
        -ms-transform-style: preserve-3d;
        -ms-animation: spin 10s linear infinite;
        -ms-transform-origin: 116px 200px 116px;
        transform-style: preserve-3d;
        animation: spin 10s linear infinite;
        transform-origin: 116px 200px 116px;
      }

      #pyramid > div {
        position: absolute;
        border-style: solid;
        border-width: 200px 0 200px 346px;
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
      }

      #pyramid > div:after {
        position: absolute;
        color: #fff;
        left: -311px;
        top: -69px;
        text-align: center;
        opacity: 0.6;
      }

      #pyramid > div:first-child:after {
        position: absolute;
        content: url("../../assets/images/about/html.png");
      }

      #pyramid > div:nth-child(2):after {
        position: absolute;
        content: url("../../assets/images/about/css.png");
      }

      #pyramid > div:nth-child(3):after {
        position: absolute;
        content: url("../../assets/images/about/js.png");
      }

      #pyramid > div:nth-child(4):after {
        position: absolute;
        width: 150px;
        content: url("../../assets/images/about/vue.png");
        left: -315px;
        top: -91px;
      }

      #pyramid > div:first-child {
        border-color: transparent transparent transparent rgba(50, 50, 50, 0.6);
        -webkit-transform: rotateY(-19.5deg) rotateX(180deg) translateY(-400px);
        -moz-transform: rotateY(-19.5deg) rotateX(180deg) translateY(-400px);
        -ms-transform: rotateY(-19.5deg) rotateX(180deg) translateY(-400px);
        transform: rotateY(-19.5deg) rotateX(180deg) translateY(-400px);
      }

      #pyramid > div:nth-child(2) {
        border-color: transparent transparent transparent rgba(50, 50, 50, 0.6);
        -webkit-transform: rotateY(90deg) rotateZ(60deg) rotateX(180deg)
          translateY(-400px);
        -moz-transform: rotateY(90deg) rotateZ(60deg) rotateX(180deg)
          translateY(-400px);
        -ms-transform: rotateY(90deg) rotateZ(60deg) rotateX(180deg)
          translateY(-400px);
        transform: rotateY(90deg) rotateZ(60deg) rotateX(180deg)
          translateY(-400px);
      }

      #pyramid > div:nth-child(3) {
        border-color: transparent transparent transparent rgba(50, 50, 50, 0.9);
        -webkit-transform: rotateX(60deg) rotateY(19.5deg);
        -moz-transform: rotateX(60deg) rotateY(19.5deg);
        -ms-transform: rotateX(60deg) rotateY(19.5deg);
        transform: rotateX(60deg) rotateY(19.5deg);
      }

      #pyramid > div:nth-child(4) {
        border-color: transparent transparent transparent rgba(50, 50, 50, 0.8);
        -webkit-transform: rotateX(-60deg) rotateY(19.5deg) translateX(-116px)
          translateY(-200px) translateZ(326px);
        -moz-transform: rotateX(-60deg) rotateY(19.5deg) translateX(-116px)
          translateY(-200px) translateZ(326px);
        -ms-transform: rotateX(-60deg) rotateY(19.5deg) translateX(-116px)
          translateY(-200px) translateZ(326px);
        transform: rotateX(-60deg) rotateY(19.5deg) translateX(-116px)
          translateY(-200px) translateZ(326px);
      }
    }
  }
}
</style>