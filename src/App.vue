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
        console.log(res.data.results);
        const movies = res.data.results;

        store.movies = movies

      })
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: store.apiKey,
          query: store.searchText,
        }
      }).then(res => {
        // console.log(res.data.results)
        const series = res.data.results;
        store.series = series
      })
    },
    showMovies() {
      this.fetchData();
      store.searchText = '';
    },
  },
  created() {
    this.fetchData();
    // this.fetchSeries()
  }
}

</script>

<template>
  <div class="app">
    <AppHeader @performSearch="showMovies" />
    
    <AppMain />
    
  </div>
</template>
<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/palette.scss' as *;

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: $app-bg-color;
}
</style>
