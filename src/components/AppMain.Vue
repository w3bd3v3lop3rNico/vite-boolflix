<script>
import { store } from '../store';
import AppCard from './AppCard.vue'
export default {
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    },
    created() {
        // console.log(store.searchText, store)
    }
}
</script>
<template>
    <div class="row">
        <AppCard v-for="movie in store.movies" :item="movie" :key="movie.id">
        </AppCard>
    </div>
    
</template>
<style lang="scss" scoped></style>