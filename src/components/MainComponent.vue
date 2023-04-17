<template>
    <main class="container">
        <select name="type" id="type" class="mb-2">
            <option value="Alien">Alien</option>
        </select>
        <section id="card-list" class="p-3 row bg-danger">
            <CardComponent v-if="store.CardList.length == 50"  v-for="card in store.CardList" :card = "card"></CardComponent>
            <div v-else>hold up</div>
        </section>
    </main>
</template>


<script>
    import { store } from '../data/store'
    import CardComponent from './CardComponent.vue'
    export default {
        name:'MainComponent',
        components:{
            CardComponent
        },
        data(){
            return{
                store
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>