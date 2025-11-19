<template>
  <button class="btn-creat-delete" @click="BuildAndDelete">Add To List</button>
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
@import '../css/quasar.variables.scss';

.btn-creat-delete {
  background-color: $GreenTitel;
  border: 0;
  border-radius: 20px;
  color: $withe;
  padding: 5px 20px;
  margin: 10px;
}
.btn-creat-delete:hover {
  color: $GreenTitel;
  background-color: $withe;
}
</style>
