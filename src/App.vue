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
    fetchData() {

      if (this.store.searchText === '') {
        store.movies = []
        store.series = []
        return
      }
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: store.apiKey,
          query: store.searchText,
        }
      }).then(res => {
        // console.log(res.data.results);
        const movies = res.data.results;

        store.movies = movies

      })
      axios.get('https://api.themoviedb.org/3/search/tv', {
      params: {
        api_key: store.apiKey,
        query: store.searchText,
      }
      }).then(res => {
        // console.log(res.data)
        const series = res.data.results;
        store.series = series
      })
    },
    // fetchSeries() {
    //   axios.get('https://api.themoviedb.org/3/search/tv', {
    //     params: {
    //       api_key: store.apiKey,
    //       query: store.searchText,
    //     }
    //   }).then(res => {
    //     console.log(res.data)
    //     const series = res.data;
    //     store.series = series
    //   })
    // },
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
      this.fetchData();
      store.searchText = '';
    }
  },
  created() {
    this.fetchData()
    // this.fetchSeries()
  }
}

</script>

<template>
  <div class="container app-body">
    <header class="header">
      <AppHeader @performSearch="showMovies" />
    </header>
    <div class="main">
      <AppMain />
    </div>

  </div>
</template>
<style lang="scss">
@use './styles/general.scss';

.app-body {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    margin-bottom: 10px;
  }
}
</style>
