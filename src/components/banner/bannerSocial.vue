<template>
  <div class="social_media_">
    <ul>
      <li v-for="(item, index) in socialData" :key="index">
        <a :href="item.link" class="link_" :title="item.name">{{
          item.name
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    socialData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.social_media_ {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 9;
  padding: 0 1.75em;

  ul {
    position: relative;
    display: block;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      display: block;
      margin-block-end: 1em;

      a {
        position: relative;
        display: block;
        color: var(--color-black);
        font-size: var(--sm-text);
        transition: color 0.3s ease;
        writing-mode: vertical-lr;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
}
</style>