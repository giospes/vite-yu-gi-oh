<template>
    <main class="container">
        <select name="atype" id="atype" class="mb-2">
            <option v-for="type in store.TypeList" :value="type.archetype_name"> {{ type.archetype_name }} </option>
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