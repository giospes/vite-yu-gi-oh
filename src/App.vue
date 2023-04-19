<template>
  <HeaderComponent  ></HeaderComponent>
  <MainComponent @change-select="getCard()"></MainComponent>
</template>

<script>
  import axios from 'axios'
  import {store} from './data/store'
  import HeaderComponent from './components/HeaderComponent.vue'
  import MainComponent from './components/MainComponent.vue'

  export default {
    name: 'App',
    components: {
      HeaderComponent, MainComponent
    },
    data(){
      return{
        store
      }
    },
    methods: {
      getCard(){
        const cardUrl= store.baseUrl + store.cardEndpoint + store.filter
        store.loaded = false;
        axios.get(cardUrl).then((res) => {
          store.CardList = [...res.data.data]
          store.loaded = true
        })
      },
      getType(){
        const typeUrl= store.baseUrl + store.typeEndpoint
        store.loaded = false;
        axios.get(typeUrl).then((res) => {
          store.TypeList = [...res.data]
          
        })
      }
    },
    mounted(){
      this.getCard()
      this.getType()
    }
    
  }
</script>

<style lang="scss" scoped>

</style>