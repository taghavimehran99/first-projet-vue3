<template>
  <section>
    <div v-for="info in useinfos.infoinputs" :key="info.id">
      <label class="name-writer" for="">{{ info.text }}</label>
      <input class="tasck-write" type="text" :placeholder="info.plac" v-model="info.value" />
    </div>
  </section>
</template>
<script setup>
import { useinfocomponentget } from '../stores/InfoGet.js'
const useinfos = useinfocomponentget()
</script>
<style lang="scss" scoped>
.name-writer,
.tasck-write {
  font-weight: 700;
  margin: 10px;
}
</style>
