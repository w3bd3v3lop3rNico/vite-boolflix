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
    return {}
  },
  methods: {
  },
  created() {

  }
}

</script>

<template>
  <div class="container">
    <AppHeader />
    <AppMain />
  </div>
 
</template>
<style lang="scss">
  @use './styles/general.scss';

</style>
