<script>
import { store } from '../store';
export default {
    props: {
        item: {
            tipe: Array,
            required: true
        }
    },
}
</script>
<template>
    <div class="col">
        <div class="card">
            <h2 class="title">{{ item.title }}</h2>
            <h3 class="original-title">{{ item.original_title }}</h3>
            <p class="lang">
                {{ item.original_language }}
                <figure>
                    <img v-if="item.original_language == 'it'" src="/img/italian-flag.svg" alt="">
                    <img v-if="item.original_language == 'en'" src="/img/uk-flag.svg" alt="">
                    <img v-if="item.original_language == 'de'" src="/img/german-flag.svg" alt="">
                </figure>
            </p>
            <p class="vote">{{ item.vote_average }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
</style>