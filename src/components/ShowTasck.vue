<template>
  <section>
    <div v-for="Build in BuildLists.list" :key="Build.id">
      <h4 class="show-contain-tasck">{{ Build }}</h4>
    </div>
  </section>
</template>
<script setup>
import { useinfocomponentget } from '../stores/InfoGet.js'
const BuildLists = useinfocomponentget()
</script>
<style lang="scss" scoped>
@import '../css/quasar.variables.scss';
.show-contain-tasck {
  color: $GreenTitel;
  width: 250px;
}
</style>
