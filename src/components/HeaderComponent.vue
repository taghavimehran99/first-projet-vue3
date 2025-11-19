<template>
  <p class="text-header text-weight-medium text-h3 q-my-md">{{ HeaderText }}</p>
</template>
<script setup>
defineProps(['HeaderText'])
</script>
<style lang="scss" scoped>
@import '../css/quasar.variables.scss';

.text-header {
  color: $GreenTitel;
}
</style>
