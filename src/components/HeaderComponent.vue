<template>
  <p class="text-weight-medium text-h3 q-my-md">{{ HeaderText }}</p>
</template>
<script setup>
defineProps(['HeaderText'])
</script>
<style lang="scss" scoped>
p {
  color: #1f911f;
}
</style>
