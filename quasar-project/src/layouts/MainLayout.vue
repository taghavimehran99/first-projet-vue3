<template>
  <section>
    <TextHeader textheader='todo list' />
    <GetInfo />
    <AddBtnList />
    <ShowTasck />
  </section>
</template>
<script setup>
import GetInfo from 'src/components/GetInfo.vue'
import TextHeader from 'src/components/TextHeader.vue'
import AddBtnList from 'src/components/AddBtnList.vue'
import ShowTasck from 'src/components/ShowTasck.vue'

import {useinfocomponentget} from '../stores/InfoGet.js'
const useget = useinfocomponentget()

console.log(useget.tasck);

//  const {useinfo} = useinfocomponentget()
//  console.log(useinfo.count);
</script>
<style lang="sass" scoped>

</style>
