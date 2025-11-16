<template>
  <button @click="CreatList">Add To List</button>
</template>
<script setup>
import { useinfocomponentget } from 'src/stores/InfoGet'
const addlist = useinfocomponentget()
function CreatList() {
  console.log(addlist.tasck)
  addlist.list.push(addlist.tasck)
  addlist.infoinputs[0].value = ''
  addlist.infoinputs[1].value = ''
}
</script>
<style lang="scss" scoped></style>
