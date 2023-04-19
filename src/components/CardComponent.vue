<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <img :src="imgUrl" alt="" class="w-100">
    <h5>{{card.name}}</h5>
  </div>
</template>

<script>
  export default {
    name: 'CardComponent',
    props: ['card'],  
    data(){
      return{
      
      }
    },
    methods:{
      
    },
    computed : {
      imgUrl() {
        const imgArray = [...this.card.card_images]
        return imgArray[0].image_url
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>