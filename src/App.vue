<template>
  <div class="pgs_container_">
    <pgs-header></pgs-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import pgsHeader from "./components/header/mainHeader.vue";
export default {
  components: {
    pgsHeader,
  },
};
</script>

<style>
</style>
 