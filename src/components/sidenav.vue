<template>
  <div class="sidenav">
    <a class="logo" href="/">
      <img class="img-fluid" src="@/assets/images/logo.png" alt />
      <small>Warren</small>
    </a>
    <ul class="navigation">
      <li class="home">
        <router-link to="/">
          <b-icon-house></b-icon-house>
        </router-link>
      </li>
      <li class="about">
        <router-link to="/about">
          <b-icon-person></b-icon-person>
        </router-link>
      </li>
      <li class="skills">
        <router-link to="/skills">
          <b-icon-gear-wide-connected></b-icon-gear-wide-connected>
        </router-link>
      </li>
      <li class="works">
        <router-link to="/works">
         <b-icon-file-earmark-code></b-icon-file-earmark-code>
        </router-link>
      </li>
      <li class="contact">
        <router-link to="/contact">
         <b-icon-envelope></b-icon-envelope>
        </router-link>
      </li>
    </ul>
    <ul class="social">
      <li>
        <a href="https://www.facebook.com/warren.velasco18" target="_blank">
          <img src="@/assets/images/icons/facebook.svg" alt="">
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/warren-velasco/" target="_blank">
          <img src="@/assets/images/icons/linkedin.svg" alt="">
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/warren_designer" target="_blank">
          <img src="@/assets/images/icons/behance-network.svg" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { BIconHouse, BIconPerson, BIconGearWideConnected, BIconFileEarmarkCode, BIconEnvelope } from 'bootstrap-vue'

export default {
  components: {
    BIconHouse,
    BIconPerson,
    BIconGearWideConnected,
    BIconFileEarmarkCode,
    BIconEnvelope
  }
};
</script>

<style lang="scss" scoped>
.sidenav {
  background: #181818;
  width: 60px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
  min-height: 500px;
  .logo {
    background: #000;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    small {
      text-transform: uppercase;
      text-align: center;
      color: $base-textcolor;
      display: block;
      margin-top: 5px;
    }
  }
  .navigation {
    li {
      a {
        font-size: 28px;
        color: #909096;
        margin-bottom: 15px;
        display: block;
        line-height: 51px;
        height: 51px;
        position: relative;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        .b-icon {
          transition: all .4s;
        }
      }
      a.router-link-exact-active {
          color: $primary-color;
      }
      a:hover .b-icon {
        opacity: 0;
      }
      a:hover:after {
       opacity: 1;
      }
    }
    li a:after {
        font-size: 11px;
        text-transform: uppercase;
        position: absolute;
        color: $primary-color;
        opacity: 0;
        transition: all .6s;
    }
    li.home a:after {
        content: "home";
    }
    li.about a:after {
        content: "about";
    }
    li.skills a:after {
        content: "skills";
    }
    li.works a:after {
        content: "works";
    }
    li.contact a:after {
        content: "contact";
    }
  }
  .social {
    li {
      a {
        display: block;
        margin-bottom: 20px;
        img {
          width: 20px;
          height: auto;
          display: block;
          margin: auto;
        }
      }
    }
  }
}
</style>