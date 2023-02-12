import { defineStore } from 'pinia'
import {reactive, ref} from "vue";

export const useMoneyStore = defineStore('moneyStore', () => {
    const count = ref(0)
    const category = ref([
        {name: 'House', icon: 'fa-car-side'},
        {name: 'Clothes', icon: 'fa-shirt'},
        {name: 'Entertainment', icon: 'fa-martini-glass-citrus'},
        {name: 'Shop', icon: 'fa-basket-shopping'},
        {name: 'Gifts', icon: 'fa-gift'},
        {name: 'Health', icon: 'fa-stethoscope'},
        {name: 'Peet', icon: 'fa-cat'},
        {name: 'Car', icon: 'fa-car-side'},
        {name: 'Transport', icon: 'fa-train-subway'},
        {name: 'Toiletry', icon: 'fa-bath'},
        {name: 'Sport', icon: 'fa-dumbbell'},
        {name: 'Invoice', icon: 'fa-file-invoice-dollar'},
    ])
    const payList = reactive({
        pay: {
            name: 'Pay',
            isOpen: false,
            isAdd: true,
            list: [
                {id: '1', text: '1', amount: '1100', date: '8.02.2020'},
                {id: '2',text: '1', amount: '100', date: '8.02.2020'}]
        },
        deposit: {
            name: 'Deposit',
            isOpen: false,
            isAdd: true,
            list: [
                {id: '1', text: '1', amount: '100', date: '8.02.2020'},
                {id: '2',text: '1', amount: '100', date: '8.02.2020'}]
        },
        economy: {
            name: 'Economy',
            isOpen: false,
            isAdd: true,
            list: []
        }
    })
    const costsList = reactive({
        peet: {
            name: 'Peet',
            isOpen: false,
            isAdd: false,
            list: [
                {id: '1', text: '1', amount: '100', date: '8.02.2020'},
                {id: '2',text: '1', amount: '100', date: '8.02.2020'}]
        },
        gifts: {
            name: 'Gifts',
            isOpen: false,
            isAdd: false,
            list: [
                {id: '1', text: '1', amount: '100', date: '8.02.2020'},
                {id: '2',text: '1', amount: '100', date: '8.02.2020'}]
        },
        shop: {
            name: 'Shop',
            isOpen: false,
            isAdd: false,
            list: []
        }
    })


    return {
        count,
        category,
        costsList,
        payList
    }
})