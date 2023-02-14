<template>
  <div class="button__wrapper">
    <button @click="onMinus">
      <font-awesome-icon icon="fa-solid fa-minus" size="4x"/>
    </button>
    <button @click="onPlus">
      <font-awesome-icon icon="fa-solid fa-plus" size="4x"/>
    </button>
  </div>
</template>

<script setup>
import {defineEmits} from "vue";

const emit = defineEmits({
  onMinus: null,
  onPlus: null
})

function onMinus() {
  emit('onMinus')
}
function onPlus() {
  emit('onPlus')
}
</script>

<style scoped>
.button__wrapper {
  display: flex;
  justify-content: space-around;
  z-index: 11;
  background: #dbeafe;
  padding-bottom: 20px;
}

.button__wrapper button {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid yellowgreen;
  color: yellowgreen;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>