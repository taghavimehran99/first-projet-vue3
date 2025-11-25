<template>
  <div class="grop-btn-router" v-for="items in buttons" :key="items.id">
    <button :class="items.class" @click="$router.push(items.path)">
      {{ items.text }}
    </button>
  </div>
</template>
<script setup>
import { buttons } from '../config/InfoButtons.js'
</script>
<style lang="scss" scoped>
@import '../css/quasar.variables.scss';

.grop-btn-router {
  display: inline;
}
.btn-router {
  color: $withe;
  border-radius: 20px;
  border: 0px;
  background-color: $primary;
  margin: 10px;
  padding: 5px 20px;
}
</style>
