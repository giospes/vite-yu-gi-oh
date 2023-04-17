<template>
  <HeaderComponent></HeaderComponent>
  <MainComponent></MainComponent>
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
        const cardUrl= store.baseUrl + store.endpoint
        axios.get(cardUrl).then((res) => {
          store.CardList = res.data.data
          console.log(store.CardList)
        })
      }
    },
    mounted(){
      this.getCard()
    }
    
  }
</script>

<style lang="scss" scoped>

</style>