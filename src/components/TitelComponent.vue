<template>
  <section>
    <p class="titel-list text-weight-regular text-h4 q-my-md">{{ textheader }}</p>
  </section>
</template>
<script setup>
defineProps(['textheader'])
</script>
<style lang="scss" scoped>
.titel-list {
  font-weight: bold;
  margin: 10px;
}
</style>
