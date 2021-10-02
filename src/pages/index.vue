<template>
  <div class="home">
    <div class="vh">
      <Header />
      <Intro />
      <Content/>
      <Sponsors />
    </div>
    <div class="hei">
      <Footer />
    </div>
  </div>
</template>


<script>
export default {
  loading: {
    color: 'blue',
    height: '5px'
  },
  head: {
    meta: [
      { hid: 'description', name: 'description', content: `OneDream Fotballskole er et gratis tilbud for å jevne ut sosiale ulikheter, og for å skape en fremtidig økning i aktivitet blant barn i et trygt og utviklende miljø`}
    ],
    title: 'OneDream Fotballskole',
  }
}
</script>

<style scoped>
  /* Desktop */
@media only screen and (min-width: 900px) {
  .vh {
    min-height: 80vh;
  }

  .hei {
    min-height: 20vh;
  }
}

</style>