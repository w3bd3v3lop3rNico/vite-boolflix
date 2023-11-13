import { reactive } from 'vue';

export const store = reactive({
    apiKey: '0f4ed8bd50baa519ee2590ee16da7252',
    searchText: '',
    movies: [],
    series: [],
    flags: {
        it: '/img/italian-flag.svg',
        en: '/img/uk-flag.svg',
        de: '/img/german-flag.svg',
    },
    endImgUrl: []
})