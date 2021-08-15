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
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'
import Content from '@/components/Content.vue'
import Sponsors from '@/components/Sponsors.vue'
import Footer from '@/components/Footer.vue'




export default {


  name: 'Home',
  components: {
    Header,
    Intro,
    Content,
    Sponsors,
    Footer
  }
}
</script>


<style scoped>


</style>
