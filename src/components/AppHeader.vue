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
        <h2 class="title">Boolfix</h2>
        <div>
            <input type="text" name="search-movie" 
            v-model="store.searchText"
            @keyup.enter="onEnter">
            <button @click="onClick">cerca</button>
        </div>
        
    </nav>
</template>

<style lang="scss" scoped>
@use '../styles/partials/palette.scss' as *;
.searchbar{
    background-color: $bg-color-dark;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 30px;

    .title{
        color: $red-text-color;
        text-transform: uppercase;
    }
}
</style>
