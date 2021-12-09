<template>
  <div class="brand-logo">
    <picture>
      <source :srcset="imageLink" type="image/svg" />
      <img :src="imageLink" alt="Brand Name" />
    </picture>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    imageLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.brand-logo {
  position: relative;
  display: block;
  width: auto;
  height: 100%;

  picture {
    position: relative;
    display: block;
    width: auto;
    height: 100%;

    img {
      position: relative;
      display: block;
      width: auto;
      height: 100%;
    }
  }
}
</style>