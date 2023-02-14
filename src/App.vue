<template>
  <div class="container wrapper">
    <div class="months">{{ store.month }}</div>
    <MyMoneyDiagram @openNewCostsList="openNewCostsList"/>
    <MyMoneyBalance/>
    <MyMoneyButton @onMinus="onMinus" @onPlus="onPlus"/>
    <transition name="costs">
      <MyMoneyAddListItem
          v-if="isOpenNewCosts"
          @cancelNewCostsList="cancelNewCostsList"
          :is-choose-category="isChooseCategory"
          :is-plus="isPlus"
      />
    </transition>
  </div>
</template>

<script setup>
import MyMoneyDiagram from "@/components/MyMoneyDiagram.vue";
import MyMoneyBalance from "@/components/MyMoneyBalance.vue";
import MyMoneyButton from "@/components/MyMoneyButton.vue";
import MyMoneyAddListItem from "@/components/MyMoneyAddListItem.vue";
import {useMoneyStore} from "@/pinia/MoneyStore";
import {ref} from "vue";

const store = useMoneyStore()

const isOpenNewCosts = ref(false)
const isChooseCategory = ref(false)
const isPlus = ref(false)

const openNewCostsList = () => {
  isChooseCategory.value = true
  isOpenNewCosts.value = true
}

function cancelNewCostsList() {
  isChooseCategory.value = false
  isOpenNewCosts.value = false
  isPlus.value = false
  store.cleare()
}


function onMinus() {
  isChooseCategory.value = false
  isOpenNewCosts.value = true
}
function onPlus() {
  isChooseCategory.value = false
  isOpenNewCosts.value = true
  isPlus.value = true
}
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
