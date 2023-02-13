import { defineStore } from 'pinia'
import {reactive, ref} from "vue";



export const useMoneyStore = defineStore('moneyStore', () => {
    let date = new Date();
    let optionMonth = {month: "long"}
    let optionWeekDay = {day: "numeric", weekday: "long",}
    let month = new Intl.DateTimeFormat("ru", optionMonth).format(date);
    let weekDay = new Intl.DateTimeFormat("ru", optionWeekDay).format(date);

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
    const note = ref('')
    const amount = ref('')
    const costsName = ref('')



    const addNewCoast = () => {
        console.log('useMoneyStore')
        console.log(costsName)
        let property = {
            id: costsList[costsName.value.toLowerCase()].list.length,
            text: note.value,
            amount: amount.value,
            date: weekDay,
        }
        console.log(property)
        for(let value in costsList) {
            if(costsList[value].name == costsName.value) {
                costsList[value].list.push(property)
                console.log(costsList[value].list)
            }
        }
    }


    return {
        month,
        weekDay,
        category,
        payList,
        costsList,
        note,
        amount,
        costsName,
        addNewCoast
    }
})