<template>
  <div v-for="(btn, i) in props.category"
       :key="i">
    <button class="add-costs__btn" @click="addNewCoast(btn.name)">
      <font-awesome-icon :icon="['fa-solid', btn.icon]" />
      <span class="add-costs__btn-title">{{btn.name}}</span>
    </button>
  </div>
</template>

<script setup>
import {useMoneyStore} from "@/pinia/MoneyStore";
import {defineProps, defineEmits} from "vue";

const store = useMoneyStore()
const props = defineProps({
  category: Array
})

const emit = defineEmits({
  addNewCoast: null
})

function addNewCoast(title) {
  store.costsName = title
  emit('addNewCoast')
}
</script>

<style scoped>
.add-costs__btn {
  background: white;
  border-radius: 4px;
  border: 1px solid grey;
  padding: 30px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.add-costs__btn-title {
  font-size: 12px;
  margin-top: 8px;
}
</style>