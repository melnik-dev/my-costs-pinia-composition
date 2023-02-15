<template>
  <ul class="balance__list">
    <li v-for="(item, i) in props.list" :key="i" class="balance__list-category">
      <div v-if="item.list.length > 0" class="balance__list-item-wrapper">
        <div @click="openCat(item)" class="balance__list-cat-title">
          <span>{{ item.name }}</span><span>{{ store.oneListCount(item) }}</span>
        </div>

        <ul v-if="item.isOpen" class="balance__list-category-ul">
          <li
              v-for="(childItem, i) in item.list"
              :key="i" class="balance__list-item"
              :class="{ 'text__red' : !item.isPayLis }">
            <span>{{ childItem.amount }}</span>
            <span v-if="childItem.text">{{ childItem.text }}</span>
            <span>{{ childItem.date }}</span>
            <button @click="deleteCosts(childItem.id, item.name)">
              <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup>
import {useMoneyStore} from "@/pinia/MoneyStore";
import {defineProps, defineEmits} from "vue";
const props = defineProps({
  list: [Array, Object]
})
const emit = defineEmits({
  deleteCosts: null
})

const store = useMoneyStore()
function openCat(cat) {
  return cat.isOpen = !cat.isOpen
}

function deleteCosts(id, name) {
  emit('deleteCosts', id, name)
}
</script>

<style scoped>
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
  color: var(--btn-green);
}
.text__red {
  color: var(--btn-red)
}
</style>