<template>
  <header id="header">
    <div class="container">
      <div class="navbar">
        <brand-logo :imageLink="logoLink"></brand-logo>
        <navbar :navItem="navItem"></navbar>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import brandLogo from "./navLogo.vue";
import navbar from "./navBar.vue";
import logo from "../../assets/images/logo_black.svg";
export default {
  components: {
    brandLogo,
    navbar,
  },
  data() {
    return {
      logoLink: logo,
      navItem: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Services", link: "/services" },
        { name: "Contact Us", link: "/contact" },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  padding: 0.75em 0;
  z-index: 9999;

  .container {
    height: 100%;

    .navbar {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: auto;
      height: 100%;
    }
  }
}
</style>