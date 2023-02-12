<template>
  <div class="content">
    <button v-for="(item,i) in moneyStore.category" :key="i">
      <font-awesome-icon class="icon__color" :icon="['fa-solid', item.icon]" size="3x"/>
    </button>
    <div class="diagram"></div>
  </div>
</template>

<script setup>
import {useMoneyStore} from '@/pinia/MoneyStore'

const moneyStore = useMoneyStore()
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
  background: conic-gradient(
      brown 0.00%,
      black 0.00% 0.56%,
      blue 0.56% 5.29%,
      green 5.29% 13.57%,
      yellow 13.57% 22.90%,
      orange 22.90% 40.79%,
      red 40.79%
  );
  border-radius: 50%;
  width: 260px;
  height: 260px;
}
</style>