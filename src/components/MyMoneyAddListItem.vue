<template>
  <div class="add-costs__wrapper">
    <div @click="cancelNewCostsList" class="add-costs__cansel">Отмена</div>
    <div class="add-costs__months">Пятница, 10 февраля</div>
    <div class="add-costs__count">
      <input v-model="store.amount" type="text" placeholder="0">
    </div>
    <div class="add-costs__note">
      <input v-model="store.note" type="text" placeholder="добаить заметку">
    </div>
    <div class="add-costs__btn-wrapper">
      <MyMoneyBtnCategory v-if="isCostaBtn" @addNewCoast="addNewCoast" :category="activeComponent"/>

      <div style="display: contents" v-if="isNumberBtn">
        <div v-for="(btn, i) in buttonArr"
             :key="i">
          <button class="add-costs__btn" @click="addAmount(btn)">{{ btn }}</button>
        </div>

        <button v-if="props.isChooseCategory" @click="addNewCoast" class="add-costs__btn add-costs__btn-cat">
          Добавить {{ store.costsName }}
        </button>
        <button v-else @click="chooseCategory" class="add-costs__btn add-costs__btn-cat">Выбрать
          категорию
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyMoneyBtnCategory from "@/components/MyMoneyBtnCategory.vue";
import {useMoneyStore} from "@/pinia/MoneyStore";
import {ref, defineEmits, defineProps, computed} from "vue";

const props = defineProps({
  isChooseCategory: Boolean,
  isPlus: Boolean
})
const emit = defineEmits({
  cancelNewCostsList: null,
})
const store = useMoneyStore()
const buttonArr = ref(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
const isNumberBtn = ref(true)
const isCostaBtn = ref(false)
function cancelNewCostsList() {
  emit('cancelNewCostsList')
  isNumberBtn.value = true
}

function addNewCoast() {
  store.addNewCoast()
  cancelNewCostsList()
  isCostaBtn.value = false
}

function addAmount(n) {
  return store.amount += n
}

const activeComponent = computed(() => {
  return props.isPlus ? store.payCategory : store.costsCategory
})

function chooseCategory() {
  isNumberBtn.value = false
  isCostaBtn.value = true
}
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
}

.add-costs__cansel {
  cursor: pointer;
}

.add-costs__months {
  margin-top: 80px;
  margin-bottom: 30px;
}

.add-costs__count input {
  width: 50%;
  padding: 15px;
  text-align: right;
  font-size: 30px;
  background: mistyrose;
  border-radius: 4px;
  margin-bottom: 30px;
}

.add-costs__note input {
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