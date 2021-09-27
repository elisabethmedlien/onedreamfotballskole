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
    title: 'OneDream Fotballskole',
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