<template>
  <button @click="BuildAndDelete">Add To List</button>
</template>
<script setup>
import { useinfocomponentget } from 'src/stores/InfoGet'
const addlist = useinfocomponentget()
function BuildAndDelete() {
  addlist.list.push(addlist.tasck)
  addlist.infoinputs[0].value = []
  addlist.infoinputs[1].value = []
}
</script>
<style lang="scss" scoped>
button {
  background-color: green;
  border: 0;
  border-radius: 20px;
  color: white;
  padding: 5px 20px;
  margin: 10px;
}
button:hover {
  color: green;
  background-color: white;
}
</style>
