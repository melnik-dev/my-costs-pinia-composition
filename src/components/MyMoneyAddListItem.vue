<template>
<div class="add-costs__wrapper">
  <div class="add-costs__months">Пятница, 10 февраля</div>
  <div class="add-costs__count">
    <input v-model="count" type="text">
  </div>
  <div class="add-costs__note">
    <input v-model="note" type="text" placeholder="добаить заметку">
  </div>
  <div class="add-costs__btn-wrapper">
    <button class="add-costs__btn" v-for="(btn, i) in buttonArr" :key="i">{{ btn }}</button>
    <button class="add-costs__btn add-costs__btn-cat" >Добавить категорию</button>
  </div>
</div>
</template>

<script setup>
import {ref} from "vue";

const count = ref('0')
const note = ref('')
const buttonArr = ref(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

</script>

<style scoped>
.add-costs__wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #dbeafe;
  z-index: 20;
  padding: 20px;
  transition: left 1s ease;
}

.add-costs__months {
  margin-top: 80px;
  margin-bottom: 30px;
}

.add-costs__count input{
  width: 50%;
  padding: 15px;
  text-align: right;
  font-size: 30px;
  background: mistyrose;
  border-radius: 4px;
  margin-bottom: 30px;
}
.add-costs__note input{
  width: 50%;
  padding: 5px;
  margin-bottom: 30px;
  background: transparent;
  border: none;
  border-bottom: 1px solid grey;
}
.add-costs__btn-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

}
.add-costs__btn {
  background: white;
  border-radius: 4px;
  border: 1px solid grey;
  padding: 30px;
  font-size: 30px;
}
.add-costs__btn-cat {
  font-size: 25px;
  width: 86%;
  padding: 20px;
}
</style>