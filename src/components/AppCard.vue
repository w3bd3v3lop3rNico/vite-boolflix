<script>
import { store } from '../store';
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            average: this.item.vote_average,
            store,
            movieCast: []
        }
    },
    methods: {
        getFiveRated(voteAverage) {
            const vote = (voteAverage * 5) / 10
            return Math.ceil(vote)
        },
        getImage(item) {
            if (this.item.poster_path) {
                return `https://image.tmdb.org/t/p/w342${item.poster_path}`
            } else {
                return `/img/image-not-found.svg`
            }

            // return imageUrl
        },
        getCast() {
            axios.get(`https://api.themoviedb.org/3/movie/${item.id}/credits?api_key=${store.apiKey}`)
                .then(res => {
                    const cast = res.data.cast

                    this.movieCast = cast
                })
        }
    },
    created() {
        // console.log(this.getFiveRated(this.average))
        // console.log (this.average)
        // console.log(this.getCast())
    }
}
</script>
<template>
    <div class="card">
        <figure class="poster-img">
            <img :src="getImage(item)" alt="">
        </figure>
        <ul class="card-text">
            <li>
                <h2 class="title" v-if="item.title">{{ item.title }}</h2>
                <h2 class="title" v-else> {{ item.name }} </h2>
            </li>
            <li>
                <h3 class="original-title" v-if="item.title">{{ item.original_title }}</h3>
                <h3 class="original-title" v-else>{{ item.original_name }}</h3>
            </li>
            <li class="lang">
                <figure class="lang-img" v-if="store.flags[item.original_language]">
                    <img :src="store.flags[item.original_language]" alt="">
                </figure>
                <p class="lang-text" v-else>
                    {{ item.original_language }}
                </p>
            </li>
            <li class="vote">
                <!-- <p class="vote">{{ getFiveRated(average) }}</p> -->
                <div class="stars" v-for="(stars, idx) in 5" :key="idx"
                    :class="idx <= getFiveRated(average) & getFiveRated(average) > 0 ? 'gold-star' : ''">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.col-12 {
    flex-basis: 100%;
}

.poster-img {
    max-width: 100px;

    img {
        width: 100%;
    }
}

.card {
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 20px;
    display: flex;

    .card-text {
        padding-left: 10px;

        .vote {
            display: flex;
            flex-wrap: wrap;

            .gold-star {
                color: gold;
            }
        }
    }

    .lang {
        display: flex;
        align-items: center;
        gap: 5px;

        .lang-text {
            text-transform: uppercase;
        }

        .lang-img {
            width: 20px;
        }
    }
}
</style>