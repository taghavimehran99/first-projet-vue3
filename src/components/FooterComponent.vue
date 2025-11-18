<template>
  <p class="text-weight-medium text-h3 q-my-md">{{ FooterText }}</p>
</template>
<script setup>
defineProps(['FooterText'])
</script>
<style lang="scss" scoped>
p {
  color: #1f911f;
}
</style>
