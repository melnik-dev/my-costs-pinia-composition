<template>
  <div class="container wrapper">
    <div class="months">февраль</div>
    <MyMoneyDiagram/>
    <MyMoneyBalance :balance="balance" :costs-list="store.costsList" :pay-list="store.payList"/>
    <MyMoneyButton/>
    <transition name="costs">
      <MyMoneyAddListItem v-if="isCosts"/>
    </transition>
  </div>
</template>

<script setup>
import MyMoneyDiagram from "@/components/MyMoneyDiagram.vue";
import MyMoneyBalance from "@/components/MyMoneyBalance.vue";
import MyMoneyButton from "@/components/MyMoneyButton.vue";
import MyMoneyAddListItem from "@/components/MyMoneyAddListItem.vue";
import { useMoneyStore } from "@/pinia/MoneyStore";
import {onMounted, ref, isReactive, computed} from "vue";

const store = useMoneyStore()

function listBalance(obj) {
  let sum = 0

  for (let item in obj) {
    sum += obj[item].list.reduce((sum, current) => +sum + +current.amount, 0)
  }
  return sum
}
const balance = computed(()=> listBalance(store.payList) - listBalance(store.costsList))
const isCosts = ref(false)
onMounted(() => console.log( isReactive(store.payList ) ) )
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20px;
}
button {
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: inherit;
  color: inherit;
}
.costs-enter-active,
.costs-leave-active {
  transition: transform 1s ease;
}

.costs-enter-from,
.costs-leave-to {
  transform: translateX(540px);
}

.container {
  margin: 0 auto;
}

.wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-width: 500px;
  height: 700px;
  padding: 20px;
  padding-bottom: 0;
  border-radius: 6px;
  background: #dbeafe;
  position: relative;
}

.months {
  margin-bottom: 10px;
}
</style>
