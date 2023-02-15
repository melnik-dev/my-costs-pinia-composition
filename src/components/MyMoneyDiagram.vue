<template>
  <div class="content">
    <div v-for="(cat,i) in store.costsCategory" :key="i">
      <button @click="openNewCostsList(cat.name)">
        <font-awesome-icon
            :style="{ color: cat.color }"
            class="icon__color"
            :icon="['fa-solid', cat.icon]" size="3x"/>
      </button>
    </div>
    <div class="diagram" :style="{ background: gradient }">
      <div class="diagram__circle">
        <span class="diagram__circle--plus">{{store.listBalance(true)}}</span>
        <span class="diagram__circle--minus">-{{store.listBalance(false)}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMoneyStore} from "@/pinia/MoneyStore";
import {computed, defineEmits, watch} from "vue";

const store = useMoneyStore()

const emit = defineEmits({
  openNewCostsList: null
})

function openNewCostsList(CatName) {
  emit('openNewCostsList')
  store.costsName = CatName
}

function createGradient() {
  let conicGradient = []
  let point = 0.00
  let backProc = 0.00

  store.costsList.forEach(elem => {
    if (!elem.isPayLis && elem.procent > 0) {
      point = +point + +backProc
      conicGradient.push(`${elem.color} ${point}% ${point + +elem.procent}%`)
      backProc = +elem.procent
    }
  })
  return `conic-gradient(${store.listBalance(false) === 0 ? '#cbd5e1 0.00% 100.00%' : conicGradient.join(', ')})`;
}

const gradient = computed(() => createGradient())

store.setProcent()
watch(store.costsList, () => {
  store.setProcent()
})
</script>

<style scoped>
.content {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
}

.diagram {
  grid-column: 2/4;
  grid-row: 2/4;
  border-radius: 50%;
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.diagram__circle {
  border-radius: 50%;
  width: 160px;
  height: 160px;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
.diagram__circle--plus {
  color: var(--btn-red);
}
.diagram__circle--minus {
  color: var(--btn-green);
}
</style>