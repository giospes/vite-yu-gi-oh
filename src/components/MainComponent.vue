<template>
    <main class="container">
        <select name="type" id="type" class="mb-2" v-model="select" @change="filterbyArchetypes($event)">
            <option v-for="type in store.TypeList" :value="type.archetype_name"> {{ type.archetype_name }} </option>
        </select>
        <section id="card-list" class="p-3 row bg-danger">
            <CardComponent   v-for="card in store.CardList" :card = "card"></CardComponent>
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
                store,
                select: ''

            }
        },
        methods:{
            filterbyArchetypes(event){
                this.store.filter = '&archetype=' + event.target.value
                console.log(this.store.filter)
                this.$emit('changeSelect')
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>