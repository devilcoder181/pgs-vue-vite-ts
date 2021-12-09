<template>
  <nav>
    <ul>
      <li v-for="(item, index) in navItem" :key="index">
        <router-link :to="item.link" :title="item.name">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  props: {
    navItem: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  display: block;
  width: auto;

  ul {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      position: relative;
      display: block;
      margin-inline-start: 1.5em;

      &:first-child {
        margin-inline-start: 0;
      }

      a {
        position: relative;
        display: block;
        color: var(--color-black);
        transition: all 0.3s ease;
        font-size: var(--md-text);
        font-weight: 500;

        &:hover,
        &.router-link-exact-active {
          color: var(--primary-color);
        }
      }
    }
  }
}
</style>