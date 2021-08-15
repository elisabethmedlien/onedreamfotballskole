<template>
  <Home />
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #b1b1b1;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>