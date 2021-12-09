<template>
  <section class="home_banner">
    <div class="container">
      <banner-content :title="bannerTitle" :facts="keyFacts"></banner-content>
    </div>
    <banner-social :socialData="socialMedia"></banner-social>
  </section>
</template>

<script lang="ts">
import bannerSocial from "./bannerSocial.vue";
import bannerContent from "./bannerContent.vue";
export default {
  components: {
    bannerSocial,
    bannerContent,
  },
  data() {
    return {
      socialMedia: [
        { name: "Facebook", link: "#" },
        { name: "Instagram", link: "#" },
        { name: "LinkedIn", link: "#" },
        { name: "Twitter", link: "#" },
      ],
      bannerTitle:
        "#1 Web Design company in Dubai providing world class user experience",
      keyFacts: ["Web Design", "Web Development", "Mobile Apps"],
    };
  },
};
</script>

<style lang="scss" scoped>
.home_banner {
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;

  .container {
    height: 100%;
  }
}
</style>