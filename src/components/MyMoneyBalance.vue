<template>
  <div class="balance__wrapper">
    <div :class="['balance', {'balance--open': isOpenList}]">
      <div class="balance__header">
        <button @click="openList" class="balance__btn">
          <font-awesome-icon icon="fa-solid fa-bars" size="3x"/>
        </button>
        <div :class="{ 'bg__light-red' : balance < 0 }"
            class="balance__text">Баланс {{ balance }} руб</div>
        <button @click="openList" class="balance__btn">
          <font-awesome-icon icon="fa-solid fa-bars" size="3x"/>
        </button>
      </div>

      <div class="balance__list-wrapper">
        <MyMoneyBalanceList @deleteCosts="deleteCosts" :list="store.payItemList"/>
        <MyMoneyBalanceList @deleteCosts="deleteCosts" :list="store.costsItemList"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyMoneyBalanceList from "@/components/MyMoneyBalanceList.vue";
import {useMoneyStore} from "@/pinia/MoneyStore";
import {ref, computed} from "vue";

const store = useMoneyStore()
//
// const payItemList = computed(() => store.costsList.filter(item => {
//   return item.isPayLis === true
// }))
// const costsItemList = computed(() => store.costsList.filter(item => {
//   return item.isPayLis === false
// }))

const balance = computed(() => store.listBalance(true) - store.listBalance(false))
const isOpenList = ref(false)

function openList() {
  return isOpenList.value = !isOpenList.value
}

function deleteCosts(id, name) {
  store.deleteCosts(id, name)
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
  background: var(--bg-color);
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
  color: var(--btn-green);
  border: none;
}

.balance__text {
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: var(--light-green);
  padding: 5px 20px;
}
.bg__light-red {
  background: var(--light-red);
}
.balance__list-wrapper {
  padding: 10px 80px;
}
</style>