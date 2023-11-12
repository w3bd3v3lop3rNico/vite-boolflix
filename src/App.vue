<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.Vue';
import { store } from './store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store
    }
  },
  methods: {
    fetchMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: store.apiKey,
          query: store.searchText,
        }
      }).then(res => {
        console.log(res.data.results);
        const movies = res.data.results;

        store.movies = movies
      })
    },
    // fetchMovies () {
    //   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${this.query}&language=it_IT`)
    //   .then(res => {
    //     console.log(res.data)
    //   })
    // },
    // fetchSeries() {
    //   axios.get('https://api.themoviedb.org/3/search/tv')
    // },
    showMovies() {
      this.fetchMovies();
      store.searchText = '';
    }

  },
  created() {
    this.fetchMovies()
  }
}

</script>

<template>
  <div class="container">
    <AppHeader @performSearch="showMovies" />
    <div class="">
      <AppMain v-for="movie in store.movies" :item="movie" :key="movie.id" @enterSearch="showMovies" />
    </div>

  </div>
</template>
<style lang="scss">
@use './styles/general.scss';
</style>
