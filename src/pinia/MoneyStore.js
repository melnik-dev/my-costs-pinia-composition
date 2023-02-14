import {defineStore} from 'pinia'
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
    const costsList = reactive([
        {name: 'Pay', isPayLis: true, icon: 'fa-credit-card', isOpen: false, list: [
                {id: '0', text: '1', amount: '1100', date: '8.02.2020'},
                {id: '1', text: '1', amount: '100', date: '8.02.2020'}]},
        {name: 'Deposit', isPayLis: true, icon: 'fa-money-bill-transfer', isOpen: false, list: [
                {id: '0', text: '1', amount: '100', date: '8.02.2020'},
                {id: '1', text: '1', amount: '100', date: '8.02.2020'}]},
        {name: 'Economy', isPayLis: true, icon: 'fa-sack-dollar', isOpen: false, list: []},
        {name: 'House', isPayLis: false, icon: 'fa-car-side', isOpen: false, list: []},
        {name: 'Clothes', isPayLis: false, icon: 'fa-shirt', isOpen: false, list: []},
        {name: 'Entertainment', isPayLis: false, icon: 'fa-martini-glass-citrus', isOpen: false, list: []},
        {name: 'Shop', isPayLis: false, icon: 'fa-basket-shopping', isOpen: false, list: []},
        {name: 'Gifts', isPayLis: false, icon: 'fa-gift', isOpen: false, list: [
                {id: '0', text: '1', amount: '100', date: '8.02.2020'},
                {id: '1', text: '1', amount: '100', date: '8.02.2020'}]},
        {name: 'Health', isPayLis: false, icon: 'fa-stethoscope', isOpen: false, list: []},
        {name: 'Peet', isPayLis: false, icon: 'fa-cat', isOpen: false, list: [
                {id: '0', text: '1', amount: '100', date: '8.02.2020'},
                {id: '1', text: '1', amount: '100', date: '8.02.2020'}]},
        {name: 'Car', isPayLis: false, icon: 'fa-car-side', isOpen: false, list: []},
        {name: 'Transport', isPayLis: false, icon: 'fa-train-subway', isOpen: false, list: []},
        {name: 'Toiletry', isPayLis: false, icon: 'fa-bath', isOpen: false, list: []},
        {name: 'Sport', isPayLis: false, icon: 'fa-dumbbell', isOpen: false, list: []},
        {name: 'Invoice', isPayLis: false, icon: 'fa-file-invoice-dollar', isOpen: false, list: []}
    ])
    const note = ref('')
    const amount = ref('')
    const costsName = ref('')


    const cleare = () => {
        note.value = ''
        amount.value = ''
        costsName.value = ''
    }
    const addNewCoast = () => {
        let i = costsList.findIndex(el => el.name === costsName.value)
        let property = {
            id: costsList[i].list.length,
            text: note.value,
            amount: amount.value,
            date: weekDay,
        }

        for (let value in costsList) {
            if (costsList[value].name === costsName.value) {
                costsList[value].list.push(property)
            }
        }
        cleare()
    }

    const deleteCosts = (id, name) => {
        for (let value in costsList) {
            if (costsList[value].name === name) {
                costsList[value].list = costsList[value].list.filter((item) => {
                    return item.id !== id
                })
            }
        }
    }

    return {
        month,
        weekDay,
        category,
        costsList,
        note,
        amount,
        costsName,
        addNewCoast,
        deleteCosts,
        cleare
    }
})