<template>
  <section>
    <h3>{{ textheader }}</h3>
  </section>
</template>
<script setup>
defineProps(['textheader'])
</script>
<style lang="scss" scoped>
h3 {
  font-weight: bold;
  margin: 10px;
}
</style>
