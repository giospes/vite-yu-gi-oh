import { reactive } from 'vue'

export const store = reactive({
    CardList: [],
    baseUrl: 'https://db.ygoprodeck.com/api/v7/',
    endpoint: 'cardinfo.php?num=50&offset=0'
})