import {defineStore} from 'pinia'
import {computed, reactive, ref} from "vue";


export const useMoneyStore = defineStore('moneyStore', () => {
    let date = new Date();
    let optionMonth = {month: "long"}
    let optionWeekDay = {day: "numeric", weekday: "long",}
    let month = new Intl.DateTimeFormat("ru", optionMonth).format(date);
    let weekDay = new Intl.DateTimeFormat("ru", optionWeekDay).format(date);

    const costsList = reactive([
        {name: 'Pay', isPayLis: true, isOpen: false, icon: 'fa-credit-card', color: '#22c55e', list: [
                {id: '0', text: 'Зарплата', amount: '5000', date: 'среда, 15'}], procent: 0},
        {name: 'Deposit', isPayLis: true, isOpen: false, icon: 'fa-money-bill-transfer', color: '#22c55e', list: [
                {id: '0', text: 'Нашол', amount: '500', date: 'среда, 15'},
                {id: '1', text: 'Вернули', amount: '1000', date: 'среда, 15'}], procent: 0},
        {name: 'Economy', isPayLis: true, isOpen: false, icon: 'fa-sack-dollar', color: '#22c55e', list: [], procent: 0},

        {name: 'House', isPayLis: false, isOpen: false, icon: 'fa-house', color: '#f87171', list: [], procent: 0},
        {name: 'Clothes', isPayLis: false, isOpen: false, icon: 'fa-shirt', color: '#fb923c', list: [], procent: 0},
        {name: 'Entertainment', isPayLis: false, isOpen: false, icon: 'fa-martini-glass-citrus', color: '#facc15', list: [], procent: 0},
        {name: 'Shop', isPayLis: false, isOpen: false, icon: 'fa-basket-shopping', color: '#a3e635', list: [], procent: 0},
        {name: 'Gifts', isPayLis: false, isOpen: false, icon: 'fa-gift', color: '#818cf8', list: [
                {id: '0', text: 'Цветы', amount: '1200', date: '8.02.2020'},
                {id: '1', text: 'Морожено', amount: '500', date: '8.02.2020'}], procent: 0},
        {name: 'Health', isPayLis: false, isOpen: false, icon: 'fa-stethoscope', color: '#22d3ee', list: [], procent: 0},
        {name: 'Peet', isPayLis: false, isOpen: false, icon: 'fa-cat', color: '#38bdf8', list: [
                {id: '0', text: 'Корм', amount: '3700', date: '8.02.2020'},
                {id: '1', text: 'Игрушка', amount: '400', date: '8.02.2020'}], procent: 0},
        {name: 'Car', isPayLis: false, isOpen: false, icon: 'fa-car-side', color: '#34d399', list: [], procent: 0},
        {name: 'Transport', isPayLis: false, isOpen: false, icon: 'fa-train-subway', color: '#e11d48', list: [], procent: 0},
        {name: 'Toiletry', isPayLis: false, isOpen: false, icon: 'fa-bath', color: '#f472b6', list: [], procent: 0},
        {name: 'Sport', isPayLis: false, isOpen: false, icon: 'fa-dumbbell', color: '#60a5fa', list: [], procent: 0},
        {name: 'Invoice', isPayLis: false, isOpen: false, icon: 'fa-file-invoice-dollar', color: '#f59e0b', list: [{id: '0', text: 'Свет', amount: '1300', date: '8.02.2020'}], procent: 0}
    ])
    const note = ref('')
    const amount = ref('')
    const costsName = ref('')

    const payItemList = computed(() => costsList.filter(item => {
        return item.isPayLis === true
    }))
    const costsItemList = computed(() => costsList.filter(item => {
        return item.isPayLis === false
    }))

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

    function oneListCount(elem) {
        return elem.list.reduce((sum, current) => +sum + +current.amount, 0)
    }

    function listBalance(is){
        let sum = 0
        costsList.forEach( elem => {
            if (elem.isPayLis === is) {
                sum += oneListCount(elem)
            }
        })
        return sum
    }
    function setProcent() {
        let allCostsBalans = listBalance(false)
        costsList.forEach(elem => {
            if (!elem.isPayLis) {
                let sum = oneListCount(elem)
                elem.procent = (100 * sum / allCostsBalans).toFixed(2)
            }
        })
    }

    return {
        month,
        weekDay,
        costsList,
        payItemList,
        costsItemList,
        note,
        amount,
        costsName,
        addNewCoast,
        deleteCosts,
        cleare,
        oneListCount,
        listBalance,
        setProcent
    }
})