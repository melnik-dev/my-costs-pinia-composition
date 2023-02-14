import {defineStore} from 'pinia'
import {reactive, ref} from "vue";


export const useMoneyStore = defineStore('moneyStore', () => {
    let date = new Date();
    let optionMonth = {month: "long"}
    let optionWeekDay = {day: "numeric", weekday: "long",}
    let month = new Intl.DateTimeFormat("ru", optionMonth).format(date);
    let weekDay = new Intl.DateTimeFormat("ru", optionWeekDay).format(date);

    const payCategory = ref([
        {name: 'Pay', icon: 'fa-credit-card', color: '#22c55e'},
        {name: 'Deposit', icon: 'fa-money-bill-transfer', color: '#22c55e'},
        {name: 'Economy', icon: 'fa-sack-dollar', color: '#22c55e'}
    ])
    const costsCategory = ref([
        {name: 'House', icon: 'fa-house', color: '#f87171'},
        {name: 'Clothes', icon: 'fa-shirt', color: '#fb923c'},
        {name: 'Entertainment', icon: 'fa-martini-glass-citrus', color: '#facc15'},
        {name: 'Shop', icon: 'fa-basket-shopping', color: '#a3e635'},
        {name: 'Gifts', icon: 'fa-gift', color: '#818cf8'},
        {name: 'Health', icon: 'fa-stethoscope', color: '#22d3ee'},
        {name: 'Peet', icon: 'fa-cat', color: '#38bdf8'},
        {name: 'Car', icon: 'fa-car-side', color: '#34d399'},
        {name: 'Transport', icon: 'fa-train-subway', color: '#e11d48'},
        {name: 'Toiletry', icon: 'fa-bath', color: '#f472b6'},
        {name: 'Sport', icon: 'fa-dumbbell', color: '#60a5fa'},
        {name: 'Invoice', icon: 'fa-file-invoice-dollar', color: '#f59e0b'},
    ])

    const costsList = reactive([
        {name: 'Pay', isPayLis: true, isOpen: false, list: [
                {id: '0', text: '1', amount: '1100', date: '8.02.2020'},
                {id: '1', text: '1', amount: '100', date: '8.02.2020'}]},
        {name: 'Deposit', isPayLis: true, isOpen: false, list: [
                {id: '0', text: '1', amount: '100', date: '8.02.2020'},
                {id: '1', text: '1', amount: '100', date: '8.02.2020'}]},
        {name: 'Economy', isPayLis: true, isOpen: false, list: []},
        {name: 'House', isPayLis: false, isOpen: false, list: []},
        {name: 'Clothes', isPayLis: false, isOpen: false, list: []},
        {name: 'Entertainment', isPayLis: false, isOpen: false, list: []},
        {name: 'Shop', isPayLis: false, isOpen: false, list: []},
        {name: 'Gifts', isPayLis: false, isOpen: false, list: [
                {id: '0', text: '1', amount: '100', date: '8.02.2020'},
                {id: '1', text: '1', amount: '100', date: '8.02.2020'}]},
        {name: 'Health', isPayLis: false, isOpen: false, list: []},
        {name: 'Peet', isPayLis: false, isOpen: false, list: [
                {id: '0', text: '1', amount: '100', date: '8.02.2020'},
                {id: '1', text: '1', amount: '100', date: '8.02.2020'}]},
        {name: 'Car', isPayLis: false, isOpen: false, list: []},
        {name: 'Transport', isPayLis: false, isOpen: false, list: []},
        {name: 'Toiletry', isPayLis: false, isOpen: false, list: []},
        {name: 'Sport', isPayLis: false, isOpen: false, list: []},
        {name: 'Invoice', isPayLis: false, isOpen: false, list: []}
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
        payCategory,
        costsCategory,
        costsList,
        note,
        amount,
        costsName,
        addNewCoast,
        deleteCosts,
        cleare
    }
})