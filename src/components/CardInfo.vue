<template>
  <q-card class="my-card text-white q-ma-xl text-center">
    <q-card-section v-if="useinformation.InfoCard.length > 0">
      <div class="text-h6">
        {{ useinformation.InfoCard[0].title }}
      </div>
      <div class="text-subtitle2 q-mt-xl">{{ useinformation.InfoCard[0].description }}</div>
    </q-card-section>
    <div v-else>loding......</div>
  </q-card>
</template>
<script setup>
import { useinfocomponentget } from '../stores/InfoGet.js'
import { onMounted } from 'vue'
const useinformation = useinfocomponentget()
onMounted(() => {
  useinformation.GetInfoCard()
})
</script>
<style lang="scss" scoped>
@import '../css/quasar.variables.scss';

.my-card {
  width: 300px;
  height: 300px;
  background-color: $warning;
}
</style>
