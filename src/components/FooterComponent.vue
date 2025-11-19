<template>
  <p class="text-footer text-weight-medium text-h3 q-my-md">{{ FooterText }}</p>
</template>
<script setup>
defineProps(['FooterText'])
</script>
<style lang="scss" scoped>
@import '../css/quasar.variables.scss';

.text-footer {
  color: $GreenTitel;
}
</style>
