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
              <h1 class="blast">S</h1>
              <h1 class="blast">k</h1>
              <h1 class="blast">i</h1>
              <h1 class="blast">l</h1>
              <h1 class="blast">l</h1>
              <h1 class="blast">s</h1>
              <h1 class="blast space">&amp;</h1>
              <h1 class="blast space">E</h1>
              <h1 class="blast">x</h1>
              <h1 class="blast">p</h1>
              <h1 class="blast">e</h1>
              <h1 class="blast">r</h1>
              <h1 class="blast">i</h1>
              <h1 class="blast">e</h1>
              <h1 class="blast">n</h1>
              <h1 class="blast">c</h1>
              <h1 class="blast">e</h1>
            </div>
            <div class="group animate__animated animate__bounceIn animate__delay-2s mt-5">
              <p>The main area of my expertise is front end development and web designing.</p>
              <p>HTML, CSS, JS, Jquery, building small and meduim web apps with Vue.js</p>
              <p>I have also knowledge in graphic designing, mockup, prototyping using this applications( Adobe Photoshop, Illustrator, Xd )</p>
              <p>
                You can visit my
                <a
                  href="https://www.linkedin.com/in/warren-velasco/"
                  target="_blank"
                >Linkedin profile</a> or you can check my
                <a :href="`${publicPath}pdf/WarrenVelascoResume.pdf`">curriculum vitae</a>
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" class="wrapper pl-0">
          <div class="content d-flex justify-content-center align-items-center h-100">
            <div class="skills-charts"><div id="myCanvasContainer"><canvas width="500" height="500" id="myCanvas"><ul><li> <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML 5</a></li><li><a data-weight="25" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a></li><li><a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a></li><li><a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">TypeScript</a></li><li><a data-weight="24" href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">REST</a></li><li><a data-weight="14" href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a></li><li><a data-weight="13" href="https://en.wikipedia.org/wiki/XML" target="_blank">XML</a></li><li><a data-weight="27" href="https://en.wikipedia.org/wiki/AngularJS" target="_blank">Angular 2+</a></li><li><a data-weight="26" href="https://en.wikipedia.org/wiki/WordPress" target="_blank">Wordpress</a></li><li><a data-weight="21" href="https://en.wikipedia.org/wiki/Node.js" target="_blank">Node JS</a></li><li><a data-weight="17" href="https://en.wikipedia.org/wiki/Git" target="_blank">Git</a></li><li><a data-weight="17" href="" target="_blank">_lodash</a></li><li><a data-weight="23" href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" target="_blank">Bootstrap</a></li><li><a data-weight="15" href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank">SASS</a></li><li><a data-weight="20" href="https://en.wikipedia.org/wiki/Responsive_web_design" target="_blank">RxJs</a></li><li><a data-weight="19" href="https://en.wikipedia.org/wiki/JQuery" target="_blank">jQuery</a></li><li><a data-weight="19" href="http://mongoosejs.com/" target="_blank">NoSQl</a></li><li><a data-weight="19" href="https://karma-runner.github.io/1.0/index.html" target="_blank">Karma</a></li><li><a data-weight="19" href="http://gulpjs.com/" target="_blank">Gulp</a></li><li><a data-weight="19" href="https://www.npmjs.com/" target="_blank">npm</a></li><li><a data-weight="19" href="https://bower.io/" target="_blank">Bower</a></li><li><a data-weight="19" href="https://en.wikipedia.org/wiki/BEM" target="_blank">BEM</a></li></ul></canvas></div><div class="clear"></div></div>
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
      .skills-charts {
    position: absolute;
    width: 80%;
    right: -15%;
    left: auto;
    height: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 2
}

#myCanvasContainer {
    position: relative;
    height: 100%;
    width: 100%
}

#myCanvas {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: auto;
    height: 100%
}

#myCanvasContainer li a {
    font-size: 30px;
}

    }
  }
}
</style>