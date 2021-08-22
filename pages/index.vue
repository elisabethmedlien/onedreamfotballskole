<template>
  <div class="home">
    <Header />
    <Intro />
    <Content />
    <Sponsors />
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
    // script: [
    //   {
    //     src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
    //   }
    // ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
      }
    ]
  
  },
  loading: {
    color: 'blue',
    height: '5px'
  }
}
</script>


<style>


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


