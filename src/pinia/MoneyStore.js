import { defineStore } from 'pinia'
import {ref, computed} from "vue";

export const useMoneyStore = defineStore('moneyStore', () => {
    const count = ref(0)
    const category = ref([
        {name: 'home', icon: 'fa-car-side'},
    ])

    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    return { count, category, doubleCount, increment }
})