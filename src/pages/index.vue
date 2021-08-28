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
  loading: {
    color: 'blue',
    height: '5px'
  },
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
      },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
        integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p',
        crossorigin: 'anonymous'
      }
    ]
  
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


