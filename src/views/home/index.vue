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
              <h1 class="blast">H</h1>
              <h1 class="blast">i</h1>
              <h1 class="blast">,</h1>
            </div>
            <div class="group animate__animated animate__bounceIn animate__delay-1s">
              <h1 class="blast">I</h1>
              <h1 class="blast">'</h1>
              <h1 class="blast">m</h1>
              <img class="space" src="@/assets/images/logo.png" alt />
              <h1 class="blast">a</h1>
              <h1 class="blast">r</h1>
              <h1 class="blast">r</h1>
              <h1 class="blast">e</h1>
              <h1 class="blast">n</h1>
              <h1 class="blast">,</h1>
            </div>
            <div class="group animate__animated animate__bounceIn animate__delay-2s">
              <h1 class="blast">w</h1>
              <h1 class="blast">e</h1>
              <h1 class="blast">b</h1>
              <h1 class="blast space">d</h1>
              <h1 class="blast">e</h1>
              <h1 class="blast">v</h1>
              <h1 class="blast">e</h1>
              <h1 class="blast">l</h1>
              <h1 class="blast">o</h1>
              <h1 class="blast">p</h1>
              <h1 class="blast">e</h1>
              <h1 class="blast">r</h1>
            </div>
            <div class="group animate__animated animate__bounceIn animate__delay-2s">
              <p>Front End Developer / Graphic Designer / Web Designer</p>
            </div>
            <div class="group animate__animated animate__bounceIn animate__delay-2s">
              <router-link to="/contact" class="flat-button">CONTACT ME</router-link>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" class="wrapper pl-0">
          <div class="content d-flex justify-content-start align-items-center h-100">
            <img class="img-fluid biglogo animate__animated animate__fadeIn animate__slower animate__delay-3s" src="@/assets/images/logo-caps.png" alt />
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 633.79 594.77"
            >
              <defs />
              <polyline
                class="cls-1"
                points="311.33 576.69 45.24 207.3 142.29 168.16 313.42 420.17 272.2 117.03 361.94 83.12 539.33 329.9 495.5 29.9 574.29 0.69 633.24 449.9 494.46 506.25 377.07 340.86 405.76 540.16 269.33 594.16 0.78 225.03 142.68 167.71 257.07 334.08 229.94 134.77"
              />
            </svg>
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
        }
        img {
          width: 70px;
          position: relative;
          top: -22px;
        }
        h1:hover {
          color: $primary-color;
        }
        h1.space,
        img.space {
          margin-left: 25px;
        }
        p {
          color: #8d8d8d;
          margin-top: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
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
      .biglogo {
        width: 80%;
        z-index: 2;
      }
      svg {
        width: 80%;
        position: absolute;
      }
      svg .cls-1 {
        stroke: #666;
        stroke-width: 1px;
        fill: transparent;
        stroke-dashoffset: 4150;
        stroke-dasharray: 4150;
        animation: animateLogo 3s linear;
      }
      @keyframes animateLogo {
        to {
          stroke-dashoffset: 0;
        }
      }
    }
  }
}
</style>