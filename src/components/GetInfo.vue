<template>
  <section>
    <div v-for="info in useinfos.infoinputs" :key="info.id">
      <label for="">{{ info.text }}</label>
      <input type="text" :placeholder="info.plac" v-model="info.value" />
    </div>
  </section>
</template>
<script setup>
import { useinfocomponentget } from '../stores/InfoGet.js'
const useinfos = useinfocomponentget()
</script>
<style lang="scss" scoped>
label,
input {
  font-weight: 700;
  margin: 10px;
}
</style>
