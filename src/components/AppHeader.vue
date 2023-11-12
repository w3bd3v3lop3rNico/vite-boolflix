<script>
import { store } from '../store'
export default {
    data() {
        return {
            movie: '',
            store
        }
    },
    created () {
        console.log(this.movie, store)

    },
    methods: {
        onClick() {
            this.$emit('performSearch')
        },
    }
}
</script>

<template>
    <nav class="searchbar">
        <input type="text" name="search-movie" 
        v-model="store.searchText"
        @keyup.enter="onEnter">
        <button @click="onClick">cerca</button>
    </nav>
</template>

<style lang="scss" scoped>
</style>
