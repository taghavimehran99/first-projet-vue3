<template>
  <section>
    <div v-for="Build in BuildLists.list" :key="Build.id">
      <h4>{{ Build }}</h4>
    </div>
  </section>
</template>
<script setup>
import { useinfocomponentget } from '../stores/InfoGet.js'
const BuildLists = useinfocomponentget()
</script>
