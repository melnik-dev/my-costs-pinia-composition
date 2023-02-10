<template>
  <div class="balance__wrapper">
    <div :class="['balance', {'balance--open': isOpenList}]">
      <div class="balance__header">

        <button @click="openList" class="balance__btn">
          <font-awesome-icon icon="fa-solid fa-bars" size="3x"/>
        </button>
        <div class="balance__text">Баланс 600 руб</div>
        <button @click="openList" class="balance__btn">
          <font-awesome-icon icon="fa-solid fa-bars" size="3x"/>
        </button>
      </div>
      <div class="balance__list">
        list
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const isOpenList = ref(false)

function openList() {
  return isOpenList.value = !isOpenList.value
}

</script>

<style scoped>
.balance__wrapper {
  min-height: 100px;
}

.balance {
  position: absolute;
  left: 0;
  right: 0;
  top: 500px;
  height: 100%;
  background: #dbeafe;
  z-index: 10;
  transition: top 1s ease;
}

.balance--open {
  top: 50px;
}

.balance__header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
}

.balance__btn {
  background: transparent;
  color: yellowgreen;
  border: none;
}

.balance__text {
  display: flex;
  align-items: center;
  border-radius: 2px;
  background: lightcoral;
  padding: 5px 20px;
}
</style>