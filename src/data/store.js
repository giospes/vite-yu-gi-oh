import { reactive } from 'vue'

export const store = reactive({
    CardList: [],
    TypeList: [], 
    baseUrl: 'https://db.ygoprodeck.com/api/v7/',
    cardEndpoint: 'cardinfo.php?num=50&offset=0',
    typeEndpoint: 'archetypes.php?'
})