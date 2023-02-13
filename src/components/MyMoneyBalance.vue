<template>
  <div class="balance__wrapper">
    <div :class="['balance', {'balance--open': isOpenList}]">
      <div class="balance__header">

        <button @click="openList" class="balance__btn">
          <font-awesome-icon icon="fa-solid fa-bars" size="3x"/>
        </button>
        <div class="balance__text">Баланс {{ balance }} руб</div>
        <button @click="openList" class="balance__btn">
          <font-awesome-icon icon="fa-solid fa-bars" size="3x"/>
        </button>
      </div>
      <div class="balance__list-wrapper">
        <ul class="balance__list">
          <li v-for="(item, i) in store.payList" :key="i" class="balance__list-category">
            <div v-if="item.list.length > 0" class="balance__list-item-wrapper">
              <div @click="openCat(item)" class="balance__list-cat-title">
                <span>{{ item.name }}</span><span>{{ listCount(item) }}</span>
              </div>
              <ul v-if="item.isOpen" class="balance__list-category-ul">
                <li v-for="(childItem, i) in item.list" :key="i" class="balance__list-item">
                  <span>{{ childItem.amount }}</span>
                  <span v-if="childItem.text">{{ childItem.text }}</span>
                  <span>{{ childItem.date }}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul class="balance__list">
          <li v-for="(item, i) in store.costsList" :key="i" class="balance__list-category">
            <div v-if="item.list.length > 0" class="balance__list-item-wrapper">
              <div @click="openCat(item)" class="balance__list-cat-title">
                <span>{{ item.name }}</span><span>{{ listCount(item) }}</span>
              </div>
              <ul v-if="item.isOpen" class="balance__list-category-ul">
                <li v-for="(childItem, i) in item.list" :key="i" class="balance__list-item">
                  <span>{{ childItem.amount }}</span>
                  <span v-if="childItem.text">{{ childItem.text }}</span>
                  <span>{{ childItem.date }}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMoneyStore} from "@/pinia/MoneyStore";
import {ref, computed} from "vue";

const store = useMoneyStore()

function listBalance(obj) {
  let sum = 0

  for (let item in obj) {
    sum += obj[item].list.reduce((sum, current) => +sum + +current.amount, 0)
  }
  return sum
}

const balance = computed(() => listBalance(store.payList) - listBalance(store.costsList))

const isOpenList = ref(false)

function openList() {
  return isOpenList.value = !isOpenList.value
}

function openCat(cat) {
  return cat.isOpen = !cat.isOpen
}

function listCount(item) {
  return item.list.reduce((sum, current) => +sum + +current.amount, 0)
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

.balance__list-wrapper {
  padding: 10px 80px;
}

.balance__list {
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 0;
}

.balance__list-cat-title {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.balance__list-category-ul {
  padding-left: 20px;

}

.balance__list-item {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  font-size: 16px;
}
</style>