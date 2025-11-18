<template>
  <p class="text-weight-medium text-h3 q-my-md">{{ FooterText }}</p>
</template>
<script setup>
defineProps(['FooterText'])
</script>
<style lang="scss" scoped>
@import '../css/quasar.variables.scss';

p {
  color: $GreenTitel;
}
</style>
