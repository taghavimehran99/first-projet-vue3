<template>
  <button @click="BuildListAndDeleteValueInput">Add To List</button>
</template>
<script setup>
import { useinfocomponentget } from 'src/stores/InfoGet'
const addlist = useinfocomponentget()
function BuildListAndDeleteValueInput() {
  addlist.list.push(addlist.tasck)
  addlist.infoinputs[0].value = []
  addlist.infoinputs[1].value = []
}
</script>
