<template>
  <div class="content_">
    <h1>{{ title }}</h1>
    <ul class="fact_list">
      <li v-for="(item, index) in facts" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    facts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.content_ {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  width: 50vw;

  h1 {
    position: relative;
    display: block;
    margin: 0;
    margin-bottom: var(--lg-text-4);
    font-size: 4vw;
    line-height: 1.25;
  }

  .fact_list {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: var(--lg-text-4);

    li {
      position: relative;
      display: block;
      font-weight: 300;
      font-size: var(--md-text-2);
      padding: 0 1.5em;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateX(50%) translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--color-black);
      }

      &:first-child {
        padding-inline-start: 0;
      }

      &:last-child {
        padding-inline-end: 0;
        &:before {
          display: none;
        }
      }
    }
  }
}
</style>