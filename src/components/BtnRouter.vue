<template>
  <div class="grop-btn-router" v-for="values in buttons" :key="values.id">
    <button :class="values.class" @click="$router.push(values.function)">
      {{ values.text }}
    </button>
  </div>
</template>
<script setup>
import { buttons } from '../config/Fetchbuttons.js'
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
