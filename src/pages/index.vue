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
    ]
  }
}
</script>